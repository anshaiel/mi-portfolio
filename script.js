
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
};

cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
};

window.onscroll = () => {
    window.scrollY > 20
        ? navbar.classList.add("sticky")
        : navbar.classList.remove("sticky");
};

const descriptions = [
    "Frontend Developer",
    "UX/UI Designer",
    "Web Developer"
];

const taglineElement = document.querySelector(".tagline");
let currentIndex = 0;

function updateTagline() {
    taglineElement.textContent = descriptions[currentIndex];
    currentIndex = (currentIndex + 1) % descriptions.length;
}

setInterval(updateTagline, 2000);

updateTagline();





