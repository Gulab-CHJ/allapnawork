// ===============================
// HHGS Premium Navbar
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Overlay create
const overlay = document.createElement("div");
overlay.className = "menu-overlay";
document.body.appendChild(overlay);

// Toggle Menu
menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.className = "fa-solid fa-xmark";

    } else {

        icon.className = "fa-solid fa-bars";

    }

});

// Close menu when clicking overlay

overlay.addEventListener("click", () => {

    navbar.classList.remove("active");
    overlay.classList.remove("active");

    menuBtn.innerHTML = `
        <i class="fa-solid fa-bars"></i>
    `;

});

// Header Scroll Effect

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

// Active Menu

// const links = document.querySelectorAll(".navbar a");

// links.forEach(link => {

//     link.addEventListener("click", () => {

//         links.forEach(item => item.classList.remove("active"));

//         link.classList.add("active");

//         navbar.classList.remove("active");
//         overlay.classList.remove("active");

//         menuBtn.innerHTML = `
//         <i class="fa-solid fa-bars"></i>
//         `;

//     });

// });

// Menu Links

const links = document.querySelectorAll(".navbar a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        overlay.classList.remove("active");

        menuBtn.innerHTML = `
            <i class="fa-solid fa-bars"></i>
        `;

    });

});
