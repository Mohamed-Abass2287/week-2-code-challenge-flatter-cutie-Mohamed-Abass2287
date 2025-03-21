 //Fetch http://localhost:300/characters.
function fetchAnimals() {
    fetch("http://localhost:3000/characters")
      .then((resp) => resp.json())
      .then(myCharacter);
  }
  // Takes in a number of characters but only renders them one by one
  function myCharacter(characters) {
    characters.forEach(myDetails);
  }
  // Render animals.
  let myFlatacutie;
  function myDetails(character) {
    const characterId = character.id;
    // const characterName= character.characterName
    const characterImage = character.image;
    const characterVotes = character.votes;
    const bar = document.querySelector("#character-bar");
    const spanDetails = document.createElement("span");
    spanDetails.innerHTML = character.name;
    // Append spanDetails.
    bar.appendChild(spanDetails);
    spanDetails.style.cursor = "pointer";
    spanDetails.addEventListener("click", () => {
      // Store the state.
      myFlatacutie = character;
      // Show data that is specific to a given animal.
      showFlatacutie(character);
    });
  }
  // Display the selected data.
  function showFlatacutie(character) {
    const characterName = document.querySelector("p#name");
    characterName.innerHTML = character.name;
    const characterImg = document.querySelector("img#image");
    characterImg.src = character.image;
  // Access the votes form.
    const characterVotes = document.querySelector("span#vote-count");
    characterVotes.innerHTML = character.votes;
  }
  
  // Reset button.
  const resetVotes = document.querySelector("button#reset-btn");
  // Create a pointer. 
  resetVotes.style.cursor = "pointer";
  // Add an event listener that fires when the user clicks a button.
  // Set default animal votes to 0.
  resetVotes.addEventListener("click", () => {
    myFlatacutie.votes = 0;
    showFlatacutie(myFlatacutie);
    // Reset the form's default values.
    form.reset();
  });
  // Adding votes.
   const inputvotes = document.querySelector("input#votes");
  const animalVotes = document.querySelector("span#vote-count");
  const form = document.querySelector("form#votes-form");
  // Capture the submit event.
  form.addEventListener("submit", (e) => {
    // Prevent the event's default action from occuring.
    e.preventDefault();
  //   Return the value provided and display the results together with the animal's details.
  myFlatacutie.votes += parseInt(e.target.votes.value, 10);
  showFlatacutie(myFlatacutie);
    form.reset();
  });