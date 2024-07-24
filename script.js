let currentPageUrl = "https://swapi.dev/api/people";

window.onload = async () => {
  try {
    await loadCharacters(currentPageUrl);
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar cards");
  }
};

async function loadCharacters(url) {
  const maincontent = document.getElementById("main-content");
  maincontent.innerHTML = "";

  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    responseJson.results.forEach((Character) => {
      const card = document.createElement("div");
      card.style.backgroundImage =`url('https://starwars-visualguide.com/assets/img/characters/1.jpg')`;
      card.className = "cards";

      const characterNameBG = document.createElement("div");
      characterNameBG.className = "character-name-bg";

      const characterName = document.createElement("span");
      characterName.className = "character-name";
      characterName.innerText = `${Character.name}`;

      characterNameBG.appendChild(characterName);
      card.appendChild(characterNameBG);
      maincontent.appendChild(card);
    });
    currentPageUrl = url;
  } catch (error) {
    alert("Erro a carregar os personagens");
    console.log(error);
  }
}
