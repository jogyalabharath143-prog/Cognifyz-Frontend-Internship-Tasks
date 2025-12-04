const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop form submit

    errorMsg.textContent = "";
    successMsg.textContent = "";

    if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
        errorMsg.textContent = "⚠️ Please fill all the fields!";
        return;
    }

    if (!emailInput.value.includes("@")) {
        errorMsg.textContent = "⚠️ Please enter a valid email!";
        return;
    }

    successMsg.textContent = "🎉 Form submitted successfully!";
    form.reset();
});
