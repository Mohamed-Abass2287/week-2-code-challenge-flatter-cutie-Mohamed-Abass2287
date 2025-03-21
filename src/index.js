document.addEventListener("DOMContentLoaded", () => {
  // Define an array of character objects with the GIF details.
  const characters = [
    {
      id: 1,
      name: "Mr. Cute",
      image: "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      votes: 0
    },
    {
      id: 2,
      name: "Mx. Monkey",
      image: "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
      votes: 0
    },
    {
      id: 3,
      name: "Ms. Zebra",
      image: "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
      votes: 0
    },
    {
      id: 4,
      name: "Dr. Lion",
      image: "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
      votes: 0
    },
    {
      id: 5,
      name: "Mme. Panda",
      image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
      votes: 0
    }
  ];

  // Keep track of the currently selected character. Defaults to the first one.
  let currentCharacter = characters[0];

  // Get references to the DOM elements.
  const characterBar = document.getElementById("character-bar");
  const nameEl = document.getElementById("name");
  const imageEl = document.getElementById("image");
  const voteCountEl = document.getElementById("vote-count");
  const votesForm = document.getElementById("votes-form");
  const votesInput = document.getElementById("votes");
  const resetBtn = document.getElementById("reset-btn");

  // Update the character detail area with the given character's data
  function displayCharacter(character) {
    currentCharacter = character;
    nameEl.innerText = character.name;
    imageEl.src = character.image;
    voteCountEl.innerText = character.votes;
  }

  // Dynamically render the character bar list.
  function renderCharacterBar() {
    // Clear any existing items
    characterBar.innerHTML = "";
    // Create a span element for each character
    characters.forEach(character => {
      const charSpan = document.createElement("span");
      charSpan.innerText = character.name;
      charSpan.style.cursor = "pointer";
      charSpan.style.marginRight = "15px";
      // When the character is clicked, update the detail view.
      charSpan.addEventListener("click", () => {
        displayCharacter(character);
      });
      characterBar.appendChild(charSpan);
    });
  }

  // Render the character bar and show the default character details on page load.
  renderCharacterBar();
  displayCharacter(currentCharacter);

  // Add votes based on the form submission.
  votesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Convert the input text to a number.
    const voteValue = parseInt(votesInput.value);
    if (!isNaN(voteValue)) {
      currentCharacter.votes += voteValue;
      voteCountEl.innerText = currentCharacter.votes;
    }
    votesForm.reset();
  });

  // Reset the vote count for the current character.
  resetBtn.addEventListener("click", () => {
    currentCharacter.votes = 0;
    voteCountEl.innerText = currentCharacter.votes;
  });
});