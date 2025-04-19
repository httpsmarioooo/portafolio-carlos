function showCard(title, text) {
    const card = document.getElementById("infoCard");
    const titleElement = document.getElementById("cardTitle");
    const textElement = document.getElementById("cardText");
    const openAudio = document.getElementById("audioOpen");
  
    titleElement.textContent = title;
    textElement.textContent = text;
    card.classList.add("active");
    openAudio.play();
  }
  
  function closeCard() {
    const card = document.getElementById("infoCard");
    const closeAudio = document.getElementById("audioClose");
  
    card.classList.remove("active");
    closeAudio.play();
  }
  