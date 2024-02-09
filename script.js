document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "flamingo.png",
        "flamingoflying.png",
        "flamingolove.png",
        "flamingohappy.png",
        "excited.png",
        "mocking.png",
        "unicorn.png",

    ];

    for (let i = 2; i < 14; i++) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const img = new Image();
        img.src = randomImage;

        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        const randomSize = Math.random() * 100 + 50; 

        img.style.position = "fixed";
        img.style.left = randomX + "px";
        img.style.top = randomY + "px";
        img.style.width = randomSize + "px";
        img.style.height = "auto";
        img.classList.add("background-image");

        document.body.appendChild(img);
    }
});
