const apiUrl = "https://rickandmortyapi.com/api/character";

// Función para obtener los archivos desde el API
function getFilesFromApi() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Llamamos a la función para crear las tarjetas de personajes
      console.log('valores de rick',data);
      createCharacterCards(data.results);
    })
    .catch((error) => {
      console.error("Hubo un problema con la operación fetch:", error);
    });
}
// Función para crear las tarjetas de personajes
function createCharacterCards(characters) {
  const charactersContainer = document.getElementById("charactersContainer");
  characters.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("character-card");

    // Nombre del personaje
    const nameElement = document.createElement("H2");
    nameElement.textContent = character.name;

    // Género del personaje
    const genderElement = document.createElement("p");
    genderElement.textContent = `Género: ${character.gender === "Male" ? "Masculino" : "Femenino"}`;

    // Especie del personaje
    const speciesElement = document.createElement("p");
    speciesElement.textContent = `Especie: ${character.species === "Human" ? "Humano" : character.species === "Alien" ? "Alienigena" : character.species}`;
    
    // Imagen del personaje
    const imageElement = document.createElement("img");
    imageElement.src = character.image;

    card.appendChild(imageElement);
    card.appendChild(nameElement);
    card.appendChild(genderElement);
    card.appendChild(speciesElement);
    charactersContainer.appendChild(card);
  });
}



// Evento al hacer clic en el botón para obtener los personajes del API
document.querySelector("button").addEventListener("click", getFilesFromApi);

