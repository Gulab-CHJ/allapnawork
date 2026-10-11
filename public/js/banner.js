document.addEventListener("DOMContentLoaded", () => {

    const banners = document.querySelectorAll(".banner");

    if (banners.length <= 1) return;

    let current = 0;

    banners[current].classList.add("active");

    setInterval(() => {

        banners[current].classList.remove("active");

        current = (current + 1) % banners.length;

        banners[current].classList.add("active");

    }, 10000); // 10 सेकंड

});
