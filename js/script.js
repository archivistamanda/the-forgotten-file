let selectedChoices = {}
let playerResponses = {}
let currentId = 'scenario-00'
let answered = false
let score = 0

// Track the next question to display in Scenario 03
let currentChoiceIndex = 0

// Track visits during Scenarios 07–11.
let visitedBuilding = false
let visitedWoods = false

// Lock the descriptive memory after Scenario 12.
let descriptiveMemoryLocked = false

// Track pagination
let currentStoryPage = 0

// ==========================================
// PRELOAD SCENARIO BACKGROUNDS
// ==========================================

const preloadedBackgrounds = new Map()

function preloadBackground (url) {
  if (!url) return Promise.resolve()

  // Reuse an existing preload request
  if (preloadedBackgrounds.has(url)) {
    return preloadedBackgrounds.get(url)
  }

  const promise = new Promise(resolve => {
    const img = new Image()

    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)

    img.src = url
  })

  preloadedBackgrounds.set(url, promise)

  return promise
}

function preloadAllBackgrounds () {
  const backgrounds = [
    ...new Set(scenarios.map(scenario => scenario.background).filter(Boolean))
  ]

  return Promise.all(backgrounds.map(preloadBackground))
}

// ==========================================
// GAME PRESERVATION STATE
// ==========================================

const gameState = {
  hasDocumentation: false,
  knowsFileFormat: false,
  knowsFilenameDate: false,
  hasTechnicalMetadata: false,
  normalized: false
}

function resetGameState () {
  gameState.hasDocumentation = false
  gameState.knowsFileFormat = false
  gameState.knowsFilenameDate = false
  gameState.hasTechnicalMetadata = false
  gameState.normalized = false
}

function applyChoiceState (choice) {
  if (!choice.setState) return

  Object.assign(gameState, choice.setState)
}

// ==========================================
// DOM Elements
// ==========================================
const chapterEl = document.getElementById('chapter')
const titleEl = document.getElementById('title')
const storyEl = document.getElementById('story')
const choicesEl = document.getElementById('choices')
const continueBtn = document.getElementById('continue-button')
const profileScoreEl = document.getElementById('profile-score')

// Memories unlocked during the game.
window.collectedMemories = []

// ==========================================
// MEMORY SCENARIO DETECTION
// ==========================================
function isMemoryScenario (scenarioId) {
  return scenarioId.startsWith('mem-')
}

// ==========================================
// DISPLAY SCENARIO
// ==========================================
async function showScenario (id) {
  const scenario = scenarios.find(item => item.id === id)

  if (!scenario) {
    return
  }

  // Load the background before displaying scenario text
  if (scenario.background) {
    await preloadBackground(scenario.background)
  }

  currentId = id
  answered = false

  unlockChapterMemories(id)

  if (id === 'mem-02') {
    unlockDescriptiveMemory()
  }

  if (id === 'mem-03') {
    unlockCompletedPreservationMemory()
  }

  // Update background FIRST
  const gamePage = document.querySelector('.beginning-page')

  if (scenario.background && gamePage) {
    gamePage.style.backgroundImage = `url("${scenario.background}")`
  }

  // Now update the scenario text
  chapterEl.textContent = scenario.chapter
  titleEl.textContent = scenario.title
  storyEl.replaceChildren()

  scenario.story.forEach(paragraph => {
    const p = document.createElement('p')
    p.textContent = paragraph
    storyEl.appendChild(p)
  })

  choicesEl.replaceChildren()

  // ==========================================
  // ENDING SCENARIOS: GAME WIN / GAME FAIL
  // ==========================================
  if (id === 'scenario-win' || id === 'scenario-lose') {
    // Remove buttons and inputs from the previous question.
    choicesEl.replaceChildren()

    // Hide the Continue button from the previous scenario.
    if (continueBtn) {
      continueBtn.style.display = 'none'
    }

    // Display the final score as text.
    const endingScore = document.createElement('p')
    endingScore.classList.add('final-score')
    endingScore.textContent = `Final score: ${score}`
    choicesEl.appendChild(endingScore)

    return
  }

  // Show Continue again for regular scenarios.
  if (continueBtn) {
    continueBtn.style.display = ''
  }

  // Track selected choices for each scenario
  if (!selectedChoices[id]) {
    selectedChoices[id] = []
  }

  // Scenario 03: display questions one at a time
  let choicesToDisplay = scenario.choices

  // ==========================================
  // SCENARIO 09: SHOW OPPOSITE CHOICE + THIRD CHOICE
  // ==========================================
  if (id === 'scenario-09') {
    const scenario6Choice = playerResponses['scenario-06']?.text?.trim()

    const thirdChoice = scenario.choices[2]

    let oppositeChoiceText = null

    if (scenario6Choice === 'Building') {
      oppositeChoiceText = 'Woods'
    } else if (scenario6Choice === 'Woods') {
      oppositeChoiceText = 'Building'
    }

    choicesToDisplay = scenario.choices.filter(
      (choice, index) =>
        index === 2 ||
        (oppositeChoiceText !== null &&
          choice.text.trim() === oppositeChoiceText)
    )
  }

  if (id === 'scenario-03') {
    choicesToDisplay = scenario.choices.slice(
      0,
      Math.min(currentChoiceIndex + 1, scenario.choices.length)
    )
  }
  choicesToDisplay.forEach((choice, index) => {
    // ==========================================
    // TEXT INPUT CHOICE
    // ==========================================
    if (choice.type === 'text') {
      const form = document.createElement('form')
      form.classList.add('scenario-input-form', 'mt-3')

      const label = document.createElement('label')
      label.classList.add('form-label')
      label.textContent = choice.text

      const input = document.createElement('input')
      input.type = 'text'
      input.classList.add('form-control', 'mb-3')
      input.placeholder = choice.placeholder || 'Enter your answer...'
      input.autocomplete = 'off'
      input.required = true
      input.setAttribute('aria-label', choice.text)

      const submitButton = document.createElement('button')
      submitButton.type = 'submit'
      submitButton.textContent = 'Submit'
      submitButton.classList.add('btn', 'btn-lg', 'btn-primary')

      const errorMessage = document.createElement('p')
      errorMessage.classList.add('text-danger', 'mt-2')
      errorMessage.setAttribute('role', 'alert')
      errorMessage.hidden = true

      // Disable an already answered choice
      if (
        selectedChoices[id].includes(choice.id) ||
        (id !== 'scenario-03' && answered)
      ) {
        input.disabled = true
        submitButton.disabled = true
      }

      form.addEventListener('submit', event => {
        event.preventDefault()

        // Prevent duplicate submissions
        if (selectedChoices[id].includes(choice.id)) {
          return
        }

        if (id !== 'scenario-03' && id !== 'scenario-19' && answered) {
          return
        }

        const answer = input.value.trim()

        if (!answer) {
          input.focus()
          return
        }

        // Validate answer if acceptedAnswers is configured
        if (Array.isArray(choice.acceptedAnswers)) {
          const normalizedAnswer = answer.trim().toLowerCase()

          const isCorrect = choice.acceptedAnswers.some(
            accepted =>
              String(accepted).trim().toLowerCase() === normalizedAnswer
          )

          if (!isCorrect) {
            errorMessage.textContent =
              id === 'scenario-05'
                ? "That isn't quite right. Try sending a smiley face!"
                : "That isn't quite right. Try checking your memory profile."

            errorMessage.hidden = false
            input.focus()
            return
          }
        }
        // Disable the submit button after a correct answer
        const submitButton = form.querySelector('button[type="submit"]')
        if (submitButton) {
          submitButton.disabled = true
        }
        // Remember selected choice
        selectedChoices[id].push(choice.id)
        // Apply preservation state changes
        applyChoiceState(choice)

        // ==========================================
        // TRACK BUILDING AND WOODS VISITS
        // ==========================================

        const scenarioNumber = Number(id.replace('scenario-', ''))

        if (scenarioNumber >= 6 && scenarioNumber <= 11) {
          const selectedText = choice.text.trim().toLowerCase()

          if (selectedText.includes('building')) {
            visitedBuilding = true
          }

          if (selectedText.includes('woods')) {
            visitedWoods = true
          }
        }
        // Other scenarios allow only one answer
        if (id !== 'scenario-03') {
          answered = true
        }

        // Store each response separately
        const responseKey = id === 'scenario-03' ? `${id}-${choice.id}` : id

        playerResponses[responseKey] = {
          text: answer,
          points: Number(choice.points) || 0
        }

        // Update score
        score += Number(choice.points) || 0
        updateScoreDisplay()

        // Prevent duplicate submissions
        input.disabled = true
        submitButton.disabled = true

        // Show modal with player's actual input
        showResultModal(choice, id, answer)
      })

      form.appendChild(label)
      form.appendChild(input)
      form.appendChild(submitButton)
      form.appendChild(errorMessage)

      choicesEl.appendChild(form)

      if (!input.disabled) {
        input.focus()
      }

      return
    }

    function trackLocationChoice (choice, scenarioId) {
      const scenarioNumber = Number(scenarioId.replace('scenario-', ''))

      // Include Scenario 06, where the first location is selected.
      if (scenarioNumber < 6 || scenarioNumber > 11) {
        return
      }

      const selectedText = choice.text.trim().toLowerCase()

      if (selectedText.includes('building')) {
        visitedBuilding = true
      }

      if (
        selectedText.includes('woods') ||
        selectedText.includes('woodland') ||
        selectedText.includes('forest')
      ) {
        visitedWoods = true
      }
    }

    // ==========================================
    // STANDARD BUTTON CHOICE
    // ==========================================
    const button = document.createElement('button')

    button.type = 'button'
    button.textContent = choice.text
    button.classList.add('btn', 'btn-lg', 'btn-primary')

    const isScenario03 = id === 'scenario-03'

    // Disable previously selected choices
    if (selectedChoices[id].includes(choice.id)) {
      button.disabled = true
    }

    // Scenario 03: disable buttons belonging to earlier questions
    if (isScenario03 && index < currentChoiceIndex) {
      button.disabled = true
    }

    // Disable buttons if another choice was already made
    if (!isScenario03 && answered) {
      button.disabled = true
    }

    button.addEventListener('click', () => {
      // Prevent selecting the same choice twice
      if (selectedChoices[id].includes(choice.id)) {
        return
      }

      // handleChoice(choice);
      trackLocationChoice(choice, id)

      // Other scenarios allow only one answer
      if (!isScenario03 && answered) {
        return
      }

      // Remember selected choice
      selectedChoices[id].push(choice.id)

      // Apply preservation state changes
      applyChoiceState(choice)

      // Disable the buttons for this question/scenario
      if (isScenario03) {
        choicesEl.querySelectorAll('button').forEach(btn => {
          btn.disabled = true
        })
      } else {
        answered = true

        choicesEl.querySelectorAll('button').forEach(btn => {
          btn.disabled = true
        })
      }

      // Highlight selected choice
      button.classList.remove('btn-primary')
      button.classList.add('btn-success')

      // Store each response separately
      const responseKey = isScenario03 ? `${id}-${choice.id}` : id

      playerResponses[responseKey] = {
        text: choice.text,
        points: Number(choice.points) || 0
      }

      // Update score
      score += Number(choice.points) || 0
      updateScoreDisplay()

      // Advance to next question in Scenario 03
      if (isScenario03) {
        currentChoiceIndex = Math.min(
          currentChoiceIndex + 1,
          scenario.choices.length
        )
      }

      // ==========================================
      // HANDLE MEMORY SCENARIOS WITHOUT A MODAL
      // ==========================================
      if (isMemoryScenario(id)) {
        if (choice.next) {
          showScenario(choice.next)
        }
        return
      }

      // Show feedback modal for regular scenarios
      showResultModal(choice, id)
    })

    choicesEl.appendChild(button)
  })
}
// ==========================================
// UPDATE SCORE
// ==========================================
function updateScoreDisplay () {
  if (profileScoreEl) {
    profileScoreEl.textContent = score
  }
}

// ==========================================
// LOAD EXTERNAL MODALS
// ==========================================
async function loadModals () {
  const modalContainer = document.getElementById('modal-container')

  if (!modalContainer) {
    return
  }

  const modalFiles = [
    'modals/results.html',
    'modals/score.html',
    'modals/memory-profile.html'
  ]

  try {
    const modalHTML = await Promise.all(
      modalFiles.map(async file => {
        const response = await fetch(file)

        if (!response.ok) {
          throw new Error(`Failed to load ${file}: HTTP ${response.status}`)
        }

        return response.text()
      })
    )

    // Insert both modal files into the document.
    modalContainer.innerHTML = modalHTML.join('\n')

    // Initialize controls only after the modal HTML exists.
    initializeGame()
  } catch (error) {}
}

// ==========================================
// ADVANCE TO THE NEXT SCENARIO
// ==========================================
function advanceScenario (choice, scenarioId) {
  // Scenario 03: handle questions one at a time.
  if (scenarioId === 'scenario-03') {
    const scenario03 = scenarios.find(item => item.id === 'scenario-03')

    if (!scenario03) {
      return
    }

    if (currentChoiceIndex < scenario03.choices.length) {
      showScenario('scenario-03')
    } else {
      showScenario('scenario-04')
    }

    return
  }

  // Scenario 21: assess the preservation package.
  if (scenarioId === 'scenario-21') {
    const ending = determineEnding(gameState)
    showScenario(ending)
    return
  }

  // Existing game progression rules.
  if (score < 1) {
    showScenario('scenario-lose')
  } else if (choice.next) {
    showScenario(choice.next)
  } else {
    showScenario('scenario-win')
  }
}

function determineEnding (state) {
  const essentialComplete =
    state.knowsFileFormat &&
    state.knowsFilenameDate &&
    state.hasTechnicalMetadata &&
    state.normalized

  if (!essentialComplete) {
    return 'scenario-24'
  }

  if (state.hasDocumentation) {
    return 'scenario-22'
  }

  return 'scenario-23'
}

// ==========================================
// RESULTS MODAL
// ==========================================
function showResultModal (choice, scenarioId, playerAnswer = null) {
  const modalEl = document.getElementById('resultModal')
  const modalTitle = document.getElementById('resultModalTitle')
  const modalBody = document.getElementById('resultModalBody')
  const modalScore = document.getElementById('resultModalScore')
  const modalContinue = document.getElementById('modalContinueButton')

  if (!modalEl || !modalTitle || !modalBody || !modalScore || !modalContinue) {
    return
  }

  // modalTitle.textContent = "Results";
  modalBody.replaceChildren()

  // Show the player's selection or typed answer.
  const answerContainer = document.createElement('div')
  answerContainer.className = 'selection mb-3'

  const answerLabel = document.createElement('strong')
  answerLabel.textContent = 'Your selection: '

  const answerText = document.createElement('span')
  answerText.textContent = playerAnswer !== null ? playerAnswer : choice.text

  answerContainer.append(answerLabel, answerText)
  modalBody.appendChild(answerContainer)

  // Show feedback.
  const feedback = Array.isArray(choice.feedback)
    ? choice.feedback
    : [choice.feedback]

  // Turn-page effect for Scenario 01.
  if (scenarioId === 'scenario-01') {
    const fullFeedback = feedback
      .filter(message => message != null && message !== '')
      .join('\n\n')

    // Split after the complete sentence containing "last".
    const splitMatch = /paper and pencil wouldn’t last\?/i.exec(fullFeedback)

    if (splitMatch) {
      const splitIndex = splitMatch.index + splitMatch[0].length

      const firstText = fullFeedback.slice(0, splitIndex).trim()

      const secondText = fullFeedback.slice(splitIndex).trim()

      const firstPage = document.createElement('div')
      firstPage.className = 'mb-3'

      firstText.split(/\n\n/).forEach(text => {
        const p = document.createElement('p')
        p.className = 'mb-3'
        p.textContent = text
        firstPage.appendChild(p)
      })

      const secondPage = document.createElement('div')
      secondPage.className = 'mb-3'
      secondPage.hidden = true

      secondText.split(/\n\n/).forEach(text => {
        const p = document.createElement('p')
        p.className = 'mb-3'
        p.textContent = text
        secondPage.appendChild(p)
      })

      const turnButton = document.createElement('button')
      turnButton.type = 'button'
      turnButton.className = 'btn btn-primary mb-3'
      turnButton.textContent = 'Turn Page'

      turnButton.addEventListener('click', () => {
        firstPage.hidden = true
        turnButton.hidden = true
        secondPage.hidden = false
      })

      modalBody.append(firstPage, turnButton, secondPage)
    } else {
      // Fallback if the expected sentence isn't found.
      feedback.forEach(message => {
        if (!message) return

        const p = document.createElement('p')
        p.className = 'mb-3'
        p.textContent = message
        modalBody.appendChild(p)
      })
    }
  } else {
    // All other scenarios retain normal feedback.
    feedback.forEach(message => {
      if (!message) return

      const p = document.createElement('p')
      p.className = 'mb-3'
      p.textContent = message
      modalBody.appendChild(p)
    })
  }

  // Show points earned and the running total.
  const points = Number(choice.points) || 0

  modalScore.textContent = `${
    points >= 0 ? '+' : ''
  }${points} points | Total score: ${score}`

  // ==========================================
  // MODAL CONTINUE AND DISMISS HANDLING
  // ==========================================
  let scenarioAdvanced = false

  function advanceOnce () {
    if (scenarioAdvanced) return

    scenarioAdvanced = true
    advanceScenario(choice, scenarioId)
  }

  // Continue button only closes the modal.
  // Scenario advancement happens when the modal finishes closing.
  modalContinue.onclick = () => {
    bootstrap.Modal.getOrCreateInstance(modalEl).hide()
  }

  // Advance when the modal closes by any supported method.
  modalEl.addEventListener('hidden.bs.modal', advanceOnce, { once: true })

  bootstrap.Modal.getOrCreateInstance(modalEl).show()
}

// ==========================================
// SCORE BUTTON AND MODAL
// ==========================================
function initializeScoreModal () {
  const scoreButton = document.getElementById('score')
  const scoreModalElement = document.getElementById('scoreModal')
  const totalScore = document.getElementById('totalScore')
  const responseList = document.getElementById('responseList')

  if (!scoreButton || !scoreModalElement || !totalScore || !responseList) {
    return
  }

  // Prevent duplicate initialization.
  if (scoreButton.dataset.initialized === 'true') {
    return
  }

  scoreButton.dataset.initialized = 'true'

  const scoreModal = bootstrap.Modal.getOrCreateInstance(scoreModalElement)

  scoreButton.addEventListener('click', () => {
    // Use the current game score.
    totalScore.textContent = score

    // Clear previous responses.
    responseList.replaceChildren()

    const responses = Object.values(playerResponses)

    if (responses.length === 0) {
      const emptyMessage = document.createElement('p')
      emptyMessage.textContent = 'No responses recorded yet.'
      responseList.appendChild(emptyMessage)
    }

    // Render every submitted response.
    responses.forEach(response => {
      const item = document.createElement('div')
      item.className = 'response-item'

      const text = document.createElement('span')
      text.className = 'response-text'
      text.textContent = response.text

      const points = document.createElement('span')
      points.className = 'response-points'

      points.textContent =
        response.points > 0 ? `+${response.points}` : String(response.points)

      if (response.points < 0) {
        points.classList.add('negative')
      }

      item.append(text, points)
      responseList.appendChild(item)
    })

    scoreModal.show()
  })
}

function renderMemoryProfile () {
  const memoryList = document.getElementById('memoryList')

  if (!memoryList) {
    return
  }

  memoryList.replaceChildren()

  // const memories = window.collectedMemories || []

  // if (memories.length === 0) {
  //   const emptyMessage = document.createElement('p')
  //   emptyMessage.className = 'text-muted'
  //   emptyMessage.textContent = 'No memories collected yet.'
  //   memoryList.appendChild(emptyMessage)
  //   return
  // }
  // Always display completed preservation metadata (mem-03) first.
  const memories = [...(window.collectedMemories || [])].sort((a, b) => {
    if (a.id === 'mem-03') return -1
    if (b.id === 'mem-03') return 1
    return 0
  })

  memories.forEach(memory => {
    const card = document.createElement('div')
    card.className = 'card mb-3 response-metadata'

    const body = document.createElement('div')
    body.className = 'card-body'

    const title = document.createElement('h3')
    title.className = 'card-title'
    title.textContent = memory.name || 'Untitled memory'

    body.appendChild(title)

    // ==========================================
    // DESCRIPTIVE METADATA: DUBLIN CORE ONLY
    // ==========================================
    if (['mem-02', 'mem-04', 'mem-05'].includes(memory.id)) {
      const descriptiveFields = [
        ['dc.title', memory.title],
        ['dc.creator', memory.creator],
        ['dc.contributor', memory.contributor],
        ['dc.relation', memory.relation]
      ]

      descriptiveFields.forEach(([label, value]) => {
        if (value == null || value === '') return

        const paragraph = document.createElement('p')
        paragraph.className = 'card-text'

        const strong = document.createElement('strong')
        strong.textContent = `${label}: `

        const span = document.createElement('span')
        span.textContent = String(value)

        paragraph.append(strong, span)
        body.appendChild(paragraph)
      })
    }
    // ==========================================
    // ORIGINAL PRESERVATION METADATA: mem-01
    // ==========================================

    if (memory.id === 'mem-01') {
      const fields = [
        // Original file information
        ['premis:originalName', memory.originalName],
        ['premis:dateCreatedByApplication', memory.dateCreatedByApplication],

        // File characteristics
        ['premis:objectCategory', memory.dataType],
        ['premis:formatDesignation', memory.extensionType],

        // File modification event
        ['premis:eventType', memory.dateType],
        ['premis:eventDateTime', memory.dateModified],
        ['premis:eventDetail', memory.eventDetail],

        // Agent information
        ['premis:agent', memory.agent],
        ['premis:agentType', memory.agentType],

        // Checksum information
        ['premis:messageDigestAlgorithm', memory.checksum_algorithm],
        ['premis:messageDigest', memory.checksum]
      ]

      renderMetadataFields(fields, body)
    }

    // ==========================================
    // COMPLETED PRESERVATION METADATA: mem-03
    // ==========================================

    if (memory.id === 'mem-03') {
      const fields = [
        // Original file information
        ['premis:originalName', memory.originalName],
        ['premis:dateCreatedByApplication', memory.dateCreatedByApplication],

        // File format information
        ['premis:formatName', memory.formatName],
        ['premis:formatVersion', memory.formatVersion],
        ['premis:formatRegistryName', memory.formatRegistry],
        ['premis:formatRegistryKey', memory.puid],

        ['premis:eventType', memory.dateType1],
        ['premis:eventDateTime', memory.dateModified1],
        ['premis:eventDetail', memory.eventDetail1],

        ['premis:objectCategory', memory.dataType],
        ['premis:formatDesignation', memory.extensionType],

        // Preservation event information
        ['premis:eventType', memory.transcode],
        ['premis:eventDateTime', memory.dateModified],
        ['premis:eventDetail', memory.eventDetail],
        ['premis:eventOutcome', memory.eventOutcome],

        // Agent information
        ['premis:agent', memory.agent],
        ['premis:agentType', memory.agentType],

        // Checksum information
        ['premis:messageDigestAlgorithm', memory.checksum_algorithm],
        ['premis:messageDigest', memory.checksum]
      ]

      renderMetadataFields(fields, body)
    }

    card.appendChild(body)
    memoryList.appendChild(card)
  })
}

// ==========================================
// REUSABLE METADATA FIELD RENDERER
// ==========================================

function renderMetadataFields (fields, container) {
  fields.forEach(([label, value]) => {
    const paragraph = document.createElement('p')
    paragraph.className = 'card-text'

    const strong = document.createElement('strong')
    strong.textContent = `${label}: `

    const span = document.createElement('span')
    span.textContent =
      value == null || value === '' ? 'Not recorded' : String(value)

    paragraph.append(strong, span)
    container.appendChild(paragraph)
  })
}

// ==========================================
// UNLOCK CHAPTER MEMORIES
// ==========================================

const completedMemoryChapters = new Set()

function unlockCompletedPreservationMemory () {
  const completedMemory = (window.memories || []).find(
    memory => memory.id === 'mem-03'
  )

  if (!completedMemory) {
    return
  }

  // Remove the original and any previous completed record.
  window.collectedMemories = window.collectedMemories.filter(
    memory => memory.id !== 'mem-01' && memory.id !== 'mem-03'
  )

  // Insert the complete preservation record.
  window.collectedMemories.push(completedMemory)

  renderMemoryProfile()
}

// ==========================================
// SELECT DESCRIPTIVE MEMORY
// ==========================================
function unlockDescriptiveMemory () {
  if (descriptiveMemoryLocked) {
    return
  }

  let selectedMemoryId = null

  if (visitedBuilding && visitedWoods) {
    selectedMemoryId = 'mem-02'
  } else if (visitedBuilding) {
    selectedMemoryId = 'mem-04'
  } else if (visitedWoods) {
    selectedMemoryId = 'mem-05'
  }

  if (!selectedMemoryId) {
    return
  }

  const selectedMemory = (window.memories || []).find(
    memory => memory.id === selectedMemoryId
  )

  if (!selectedMemory) {
    return
  }

  // Remove previously unlocked descriptive metadata.
  window.collectedMemories = window.collectedMemories.filter(
    memory => !['mem-02', 'mem-04', 'mem-05'].includes(memory.id)
  )

  // Add the correct descriptive metadata.
  window.collectedMemories.push(selectedMemory)

  descriptiveMemoryLocked = true

  renderMemoryProfile()
}

function unlockChapterMemories (scenarioId) {
  const chapterMemoryMap = {
    'scenario-05': ['mem-01']
  }

  const memoryIds = chapterMemoryMap[scenarioId]

  if (!memoryIds || completedMemoryChapters.has(scenarioId)) {
    return
  }

  const sourceMemories = window.memories || []

  memoryIds.forEach(id => {
    const memory = sourceMemories.find(item => item.id === id)

    if (memory && !window.collectedMemories.some(item => item.id === id)) {
      window.collectedMemories.push(memory)
    }
  })

  completedMemoryChapters.add(scenarioId)
}

function initializeMemoryProfile () {
  const openButton = document.getElementById('openMemoryProfileButton')

  const modalElement = document.getElementById('memoryProfileModal')

  if (!openButton || !modalElement) {
    return
  }

  if (openButton.dataset.initialized === 'true') return

  openButton.dataset.initialized = 'true'

  openButton.addEventListener('click', () => {
    renderMemoryProfile()

    bootstrap.Modal.getOrCreateInstance(modalElement).show()
  })
}

// ==========================================
// RESTART GAME
// ==========================================
function restartGame () {
  score = 0
  selectedChoices = {}
  playerResponses = {}
  currentChoiceIndex = 0
  answered = false
  currentId = 'scenario-00'

  window.collectedMemories = []
  completedMemoryChapters.clear()
  visitedBuilding = false
  visitedWoods = false
  descriptiveMemoryLocked = false

  localStorage.setItem('health', '0')
  localStorage.setItem('scenarioId', 'scenario-00')

  updateScoreDisplay()
  resetGameState()

  document.getElementById('home').remove()
  document.getElementById('scenario')?.classList.remove('d-none')

  showScenario(currentId)
}

function initializeGame () {
  const journeyButton = document.getElementById('journey')
  const homePage = document.getElementById('home')
  const scenarioPage = document.getElementById('scenario')

  if (journeyButton) {
    journeyButton.addEventListener(
      'click',
      () => {
        score = 0
        selectedChoices = {}
        playerResponses = {}
        currentChoiceIndex = 0
        answered = false

        localStorage.setItem('health', '0')
        localStorage.setItem('scenarioId', 'scenario-00')

        homePage?.remove()
        scenarioPage?.classList.remove('d-none')

        updateScoreDisplay()
        resetGameState()

        showScenario('scenario-00')
      },
      { once: true }
    )
  } else {
    updateScoreDisplay()
    showScenario(currentId)
  }

  initializeMemoryProfile()
  initializeScoreModal()

  updateScoreDisplay()
}

// ==========================================
// START AFTER THE PAGE LOADS
// ==========================================
function startApplication () {
  preloadAllBackgrounds()
  loadModals()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApplication, {
    once: true
  })
} else {
  startApplication()
}
