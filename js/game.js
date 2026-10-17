let selectedChoices = {};
let currentId = "scenario-00";
// let score = Number(localStorage.getItem("score") || 0);
let answered = false;
let score = 0;

const chapterEl = document.getElementById("chapter");
const titleEl = document.getElementById("title");
const storyEl = document.getElementById("story");
const choicesEl = document.getElementById("choices");
const continueBtn = document.getElementById("continue-button");
const profileScoreEl = document.getElementById("profile-score");

function showScenario(id) {
  const scenario = scenarios.find(item => item.id === id);

  currentId = id;
  answered = false;

  chapterEl.textContent = scenario.chapter;
  titleEl.textContent = scenario.title;
  storyEl.replaceChildren();

  scenario.story.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    storyEl.appendChild(p);
  });

  // Change background
  const gamePage = document.querySelector(".beginning-page");

  if (scenario.background) {
    gamePage.style.backgroundImage =
      `url("${scenario.background}")`;

    // gamePage.style.backgroundSize = "cover";
    // gamePage.style.backgroundPosition = "center";
    // gamePage.style.backgroundRepeat = "no-repeat";
  }



  choicesEl.replaceChildren();

  // Ending scenarios have no choices
  if (id === "scenario-win" || id === "scenario-lose") {
    choicesEl.replaceChildren();
    const endingScore = document.createElement("p");
    endingScore.textContent = `Final score: ${score}`;
    choicesEl.appendChild(endingScore);
    return;
  }

  // Track selected choices for each scenario
  if (!selectedChoices[id]) {
    selectedChoices[id] = [];
  }

  scenario.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.classList.add("btn", "btn-lg", "btn-primary");

    // Disable previously selected choices
    if (selectedChoices[id].includes(choice.id)) {
      button.disabled = true;
      // button.classList.remove("btn-primary");
      // button.classList.add("btn-secondary");
    }

    button.addEventListener("click", () => {
      // Prevent selecting the same choice twice
      if (selectedChoices[id].includes(choice.id)) {
        return;
      }

      // Remember this choice
      selectedChoices[id].push(choice.id);

      // Update score
      score += Number(choice.points);
      localStorage.setItem("score", String(score));
      updateScoreDisplay();

      // Show the feedback modal
      showResultModal(choice, id);
    });

    choicesEl.appendChild(button);
  });
}

// Update score in profile
function updateScoreDisplay() {
  profileScoreEl.textContent = score;
}

function showResultModal(choice, scenarioId) {
  const modalEl = document.getElementById("resultModal");
  const modalTitle = document.getElementById("resultModalTitle");
  const modalBody = document.getElementById("resultModalBody");
  const modalScore = document.getElementById("resultModalScore");
  const modalContinue = document.getElementById("modalContinueButton");

  // Check that all required HTML elements exist
  if (
    !modalEl ||
    !modalTitle ||
    !modalBody ||
    !modalScore ||
    !modalContinue
  ) {
    console.error("One or more modal elements are missing.");
    return;
  }

  modalTitle.textContent = "Results";

  // Clear previous feedback
  modalBody.replaceChildren();

  // Display each feedback string as a separate paragraph
  const feedbackParagraphs = Array.isArray(choice.feedback)
    ? choice.feedback
    : [choice.feedback];

  feedbackParagraphs.forEach(paragraph => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    p.classList.add("mb-3");
    modalBody.appendChild(p);
  });

  // Display score
  const pointsText =
    `${Number(choice.points) >= 0 ? "+" : ""}${choice.points} points`;

  modalScore.textContent =
    `${pointsText} | Total score: ${score}`;

  // Continue to the next scenario or ending
  modalContinue.onclick = () => {
    bootstrap.Modal.getOrCreateInstance(modalEl).hide();
    showScenario(scenarioId);

    if (score < 1) {
      showScenario("scenario-lose");
    } else if (choice.next) {
      showScenario(choice.next);
    } else {
      showScenario("scenario-win");
    }
  };

  // Open the modal
  bootstrap.Modal.getOrCreateInstance(modalEl).show();
}

// Restart the game
function restartGame() {
  score = 2;
  updateScoreDisplay();
  showScenario("scenario-00");
}

// Start the game
updateScoreDisplay();
showScenario(currentId);
