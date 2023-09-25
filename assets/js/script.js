const elements = document.querySelectorAll(".element");
const windowHeight = window.innerHeight;

function checkElements() {
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            element.classList.add("fade-in");
        }
    });
}

window.addEventListener("scroll", checkElements);

const resizeButton = document.getElementById("resizeButton");

function toggleSize() {
    resizeButton.classList.toggle("active");
}

setInterval(toggleSize, 1000); // Cambia el tamaño cada 1000 ms (1 segundo)
