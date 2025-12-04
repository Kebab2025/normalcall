/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

















// Pobranie wszystkich odtwarzaczy
const audioContainers = document.querySelectorAll(".audio-container");

// Tworzenie obiektów Audio i dodanie obsługi do każdego odtwarzacza
audioContainers.forEach(container => {
    const btnPlayPause = container.querySelector(".btnPlayPause");
    const sliderProgress = container.querySelector(".sliderProgress");
    const textCurrentTime = container.querySelector(".textCurrentTime");
    const textDuration = container.querySelector(".textDuration");
    const audioSrc = container.querySelector(".btnDownload").getAttribute("href");

    const audio = new Audio(audioSrc);

    // Odtwarzanie / Pauza
    btnPlayPause.addEventListener("click", () => {
        stopAllAudios(); // Pauza dla wszystkich innych odtwarzaczy

        if (audio.paused) {
            audio.play();
            btnPlayPause.textContent = "⏸";
        } else {
            audio.pause();
            btnPlayPause.textContent = "▶";
        }
    });

    // Aktualizacja paska postępu i czasu
    audio.addEventListener("timeupdate", () => {
        textCurrentTime.textContent = formatTime(audio.currentTime);
        sliderProgress.value = (audio.currentTime / audio.duration) * 100 || 0;
    });

    // Zmiana czasu po przesunięciu suwaka
    sliderProgress.addEventListener("input", () => {
        audio.currentTime = (sliderProgress.value / 100) * audio.duration;
    });

    // Ustawienie długości utworu po załadowaniu
    audio.addEventListener("loadedmetadata", () => {
        textDuration.textContent = formatTime(audio.duration);
    });

    // Zatrzymanie wszystkich odtwarzaczy przed odtworzeniem nowego
    function stopAllAudios() {
        audioContainers.forEach(otherContainer => {
            if (otherContainer !== container) {
                const otherAudio = otherContainer.audioInstance;
                const otherBtn = otherContainer.querySelector(".btnPlayPause");

                if (otherAudio) {
                    otherAudio.pause();
                    otherBtn.textContent = "▶";
                }
            }
        });
    }

    // Przechowywanie obiektu audio w kontenerze (do zatrzymania innych)
    container.audioInstance = audio;

    // Zatrzymanie i reset po zakończeniu utworu
    audio.addEventListener("ended", () => {
        audio.currentTime = 0;
        audio.pause();
        btnPlayPause.textContent = "▶";
        sliderProgress.value = 0;
    });
});

// Konwersja czasu (sekundy → minuty:sekundy)
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
}


 // Szansa 25% na pokazanie reklamy
  if (Math.random() < 0.4) {
    const ad = document.getElementById('ad-container');
  
    const closeBtn = document.getElementById('close-ad');

    ad.style.display = 'block';
    


    // Pokaż przycisk X po 5 sekundach
    setTimeout(() => {
      closeBtn.style.display = 'block';
    }, 7000);

    // Zamknij reklamę po kliknięciu X
    closeBtn.addEventListener('click', () => {
      ad.style.display = 'none';
    });

    // Schowaj automatycznie po 22 sek
    setTimeout(() => {
      ad.style.display = 'none';
    }, 22000);
  }


document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});




