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

let soundEnabled = true;

function toggleSound() {
  soundEnabled = !soundEnabled;

  const openAudio = document.getElementById("audioOpen");
  const closeAudio = document.getElementById("audioClose");
  const toggleBtn = document.getElementById("toggleSoundBtn");
  const icon = toggleBtn.querySelector("box-icon");

  openAudio.muted = !soundEnabled;
  closeAudio.muted = !soundEnabled;

  // Cambia el ícono
  if (soundEnabled) {
    icon.setAttribute("name", "volume");
    icon.removeAttribute("type");
  } else {
    icon.setAttribute("name", "volume-mute");
    icon.setAttribute("type");
  }
}


