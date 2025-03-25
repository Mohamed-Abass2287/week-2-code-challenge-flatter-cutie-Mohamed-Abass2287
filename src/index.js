document.addEventListener("DOMContentLoaded", () => {
  let characters = []; // Initialize characters array

  // Fetch characters from the API
  function fetchCharacters() {
    fetch("https://mohaa-zeta.vercel.app/characters")
      .then(response => response.json())
      .then(data => {
        characters = data; 
        renderCharacterBar(); 
        displayCharacter(characters[0]); t
      })
      .catch(error => console.error("Error fetching characters:", error));
  }

  // Keep track of the currently selected character
  let currentCharacter;

  // Get references to the DOM elements
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

  // Dynamically render the character bar list
  function renderCharacterBar() {
    // Clear any existing items
    characterBar.innerHTML = "";
    // Create a span element for each character
    characters.forEach(character => {
      const charSpan = document.createElement("span");
      charSpan.innerText = character.name;
      charSpan.style.cursor = "pointer";
      charSpan.style.marginRight = "15px";
      // When the character is clicked, update the detail view
      charSpan.addEventListener("click", () => {
        displayCharacter(character);
      });
      characterBar.appendChild(charSpan);
    });
  }

  // Add votes based on the form submission
  votesForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Convert the input text to a number
    const voteValue = parseInt(votesInput.value);
    if (!isNaN(voteValue)) {
      currentCharacter.votes += voteValue;
      voteCountEl.innerText = currentCharacter.votes;
    }
    votesForm.reset(); // Reset the form after submission
  });

  // Reset the vote count for the current character
  resetBtn.addEventListener("click", () => {
    currentCharacter.votes = 0;
    voteCountEl.innerText = currentCharacter.votes;
  });

  // Fetch characters and initialize the app
  fetchCharacters();
});
