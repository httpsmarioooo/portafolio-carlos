function showCard(title, text, textTwo, listItems = [], cvLink = null) {
    const card = document.getElementById("infoCard");
    const titleElement = document.getElementById("cardTitle");
    const textElement = document.getElementById("cardText");
    const textElementTwo = document.getElementById("cardTextTwo");

    // Título
    titleElement.innerHTML = `<span class="gradiant-title">${title}</span>`;

    // Texto principal
    textElement.textContent = text;

    // Texto secundario
    textElementTwo.textContent = textTwo;

    // Limpiar contenido previo de la lista
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

        li.appendChild(link); // Agregar el enlace primero

        // Etiquetas de lenguajes (si existen)
        if (item.languages && item.languages.length > 0) {
            const tags = document.createElement('div');
            tags.classList.add('card-tags');
            item.languages.forEach(language => {
                const tag = document.createElement('span');
                tag.classList.add('card-tag');
                tag.textContent = language;
                tags.appendChild(tag);
            });
            li.appendChild(tags); // Agregar las etiquetas después del enlace
        }

        listContainer.appendChild(li);
    });

    // Agregar la lista al modal después del texto secundario
    textElementTwo.appendChild(listContainer);

    // Agregar botón de descarga de CV si se proporciona un enlace
    if (cvLink) {
        const cvButton = document.createElement('a');
        cvButton.href = cvLink;
        cvButton.textContent = 'Descargar CV';
        cvButton.classList.add('btn-cv'); // Clase opcional para estilos
        cvButton.target = '_blank'; // Abrir en una nueva pestaña
        textElementTwo.appendChild(cvButton);
    }

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


