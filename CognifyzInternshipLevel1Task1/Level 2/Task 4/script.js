// Select the button
const btn = document.getElementById("changeBtn");

// On click, change background color randomly
btn.addEventListener("click", () => {
    const colors = ["#fde2e4", "#e2f0cb", "#d7e3fc", "#f6f5f5", "#fff7e6"];
    const random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
});
