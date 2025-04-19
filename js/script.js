function showCard(title, text, textTwo, listItems = []) {
    const card = document.getElementById("infoCard");
    const titleElement = document.getElementById("cardTitle");
    const textElement = document.getElementById("cardText");
    const textElementTwo = document.getElementById("cardTextTwo");

    // Título
    titleElement.innerHTML = `<span class="gradiant-title">${title}</span>`;

    // Texto
    textElement.textContent = text;
    textElementTwo.textContent = textTwo;

    // Limpiar contenido previo
    const listContainer = document.createElement('ul');
    listContainer.classList.add('card-list'); // Clase opcional para estilos

    // Agregar enlaces y etiquetas a la lista
    listItems.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('card-list-item');

        // Enlace
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.text;
        link.target = '_blank'; // Abrir en una nueva pestaña
        link.classList.add('card-link'); // Clase opcional para estilos

        // Etiquetas de lenguajes
        const tags = document.createElement('div');
        tags.classList.add('card-tags');
        item.languages.forEach(language => {
            const tag = document.createElement('span');
            tag.classList.add('card-tag');
            tag.textContent = language;
            tags.appendChild(tag);
        });

        li.appendChild(link); // Agregar el enlace primero
        li.appendChild(tags); // Agregar las etiquetas debajo
        listContainer.appendChild(li);
    });

    // Agregar la lista al modal
    textElementTwo.appendChild(listContainer);

    // Mostrar la tarjeta
    card.classList.add("active");
    const openAudio = document.getElementById("audioOpen");
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


