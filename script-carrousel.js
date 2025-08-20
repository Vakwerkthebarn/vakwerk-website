/* =========================================================
   Fancybox – 7 projecten (grid-blokken -> carrousel)
   ---------------------------------------------------------
   - Koppel elk grid-item in je HTML aan een 'data-gallery'
     waarde (project1 ... project7).
   - Pas hieronder per project de afbeeldings-URLs en
     optionele captions aan.
   - Geen verborgen <a>-tags nodig; we openen via JS.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1) Definieer je 7 galleries (vervang URLs door je eigen afbeeldingen)
  //    Je mag 'caption' weglaten als je die niet nodig hebt.
  const galleries = {
    project1: [
      { src: "images/tuinkantoor1.jpg", type: "image", caption: "Project 1 — beeld 1" },
      { src: "images/tuinkantoor2.jpg", type: "image", caption: "Project 1 — beeld 2" },
      { src: "images/project1/03.jpg", type: "image", caption: "Project 1 — beeld 3" },
    ],
    project2: [
      { src: "images/project2/01.jpg", type: "image", caption: "Project 2 — beeld 1" },
      { src: "images/project2/02.jpg", type: "image", caption: "Project 2 — beeld 2" },
      { src: "images/project2/03.jpg", type: "image", caption: "Project 2 — beeld 3" },
    ],
    project3: [
      { src: "images/project3/01.jpg", type: "image", caption: "Project 3 — beeld 1" },
      { src: "images/project3/02.jpg", type: "image", caption: "Project 3 — beeld 2" },
      { src: "images/project3/03.jpg", type: "image", caption: "Project 3 — beeld 3" },
    ],
    project4: [
      { src: "images/project4/01.jpg", type: "image", caption: "Project 4 — beeld 1" },
      { src: "images/project4/02.jpg", type: "image", caption: "Project 4 — beeld 2" },
      { src: "images/project4/03.jpg", type: "image", caption: "Project 4 — beeld 3" },
    ],
    project5: [
      { src: "images/project5/01.jpg", type: "image", caption: "Project 5 — beeld 1" },
      { src: "images/project5/02.jpg", type: "image", caption: "Project 5 — beeld 2" },
      { src: "images/project5/03.jpg", type: "image", caption: "Project 5 — beeld 3" },
    ],
    project6: [
      { src: "images/project6/01.jpg", type: "image", caption: "Project 6 — beeld 1" },
      { src: "images/project6/02.jpg", type: "image", caption: "Project 6 — beeld 2" },
      { src: "images/project6/03.jpg", type: "image", caption: "Project 6 — beeld 3" },
    ],
    project7: [
      { src: "images/project7/01.jpg", type: "image", caption: "Project 7 — beeld 1" },
      { src: "images/project7/02.jpg", type: "image", caption: "Project 7 — beeld 2" },
      { src: "images/project7/03.jpg", type: "image", caption: "Project 7 — beeld 3" },
    ],
        project8: [
      { src: "images/project7/01.jpg", type: "image", caption: "Project 8 — beeld 1" },
      { src: "images/project7/02.jpg", type: "image", caption: "Project 8 — beeld 2" },
      { src: "images/project7/03.jpg", type: "image", caption: "Project 8 — beeld 3" },
    ],
  };

  // 2) Opties voor Fancybox (pas naar smaak aan)
  const fbOptions = {
    infinite: true,           // loop
    dragToClose: true,
    animated: true,
    hideScrollbar: true,
    Thumbs: { autoStart: true }, // toon thumbnails
    Toolbar: {
      display: [
        { id: "counter", position: "center" },
        "zoom",
        "slideshow",
        "fullscreen",
        "download",
        "close",
      ],
    },
    Slideshow: { autoplay: false },
    Images: { zoom: true, zoomFriction: 0.7, Panzoom: { maxScale: 3 } },
    placeFocusBack: true,
    // Eenvoudige NL labels
    l10n: {
      CLOSE: "Sluiten",
      NEXT: "Volgende",
      PREV: "Vorige",
      MODAL: "Modale venster",
      ERROR: "Kan de inhoud niet laden. <br/> Probeer later opnieuw.",
      IMAGE_ERROR: "Afbeelding kon niet geladen worden.",
      TOGGLE_ZOOM: "In-/uitzoomen",
      TOGGLE_THUMBS: "Miniaturen",
      TOGGLE_SLIDESHOW: "Diavoorstelling",
      TOGGLE_FULLSCREEN: "Volledig scherm",
      DOWNLOAD: "Downloaden",
    },
  };

  // 3) Event listeners op elk grid-blok met data-gallery
  const gridItems = document.querySelectorAll("[data-gallery]");
  gridItems.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      const key = el.getAttribute("data-gallery");
      const items = galleries[key];

      if (!items || !items.length) {
        console.warn(`Geen items gevonden voor '${key}'. Controleer 'galleries' in script.js of je data-gallery attribuut.`);
        return;
      }

      // Open Fancybox met de specifieke gallery
      Fancybox.show(items, fbOptions);
    });
  });

  // 4) Optioneel: preload eerste beelden voor snellere UX (kleine verbetering)
  Object.values(galleries).forEach((arr) => {
    if (arr[0] && arr[0].src) {
      const img = new Image();
      img.src = arr[0].src;
    }
  });
});
