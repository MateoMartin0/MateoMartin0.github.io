const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");

const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let indiceActual = 0;
const totalSlides = slide.length;

function mostrarSlide(indice) {
    slides.style.transform = `translateX(-${indice * 100}%)`;
}

function siguienteSlide() {
    indiceActual++;

    if (indiceActual >= totalSlides) {
        indiceActual = 0;
    }

    mostrarSlide(indiceActual);
}

function anteriorSlide() {
    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = totalSlides - 1;
    }

    mostrarSlide(indiceActual);
}

btnNext.addEventListener("click", siguienteSlide);
btnPrev.addEventListener("click", anteriorSlide);

setInterval(siguienteSlide, 5000);