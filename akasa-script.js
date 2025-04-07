document.addEventListener("DOMContentLoaded", function () {
    const lightBtn = document.getElementById("light-mode");
    const darkBtn = document.getElementById("dark-mode");
    const profileImg = document.getElementById("profile-img");
    const balanceState = document.getElementById("balance-state");
    const heroSection = document.getElementById("hero");

    lightBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = "#2c2d2d";
        profileImg.src = "images/akasa-light.png";
        balanceState.textContent = "Stable";
        heroSection.style.backgroundImage = "url('images/light-nebula.png')";
    });

    darkBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = "#1a1b1b";
        profileImg.src = "images/akasa-dark.png";
        balanceState.textContent = "Tamasa Shift";
        heroSection.style.backgroundImage = "url('images/dark-nebula.png')";
    });
});
