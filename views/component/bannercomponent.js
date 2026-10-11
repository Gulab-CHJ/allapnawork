function Banner(banners = []) {

    let html = "";

    banners.forEach((banner) => {

        html += `
        <div class="banner">
            <a href="${banner.link || '#'}" target="_blank">
                <img src="${banner.image}" alt="Banner">
            </a>
        </div>
        `;

    });

    return `
    <section class="banner-section">
        ${html}
    </section>
    `;
}

module.exports = Banner;
