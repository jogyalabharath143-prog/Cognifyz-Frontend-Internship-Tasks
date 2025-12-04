const btn = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            userList.innerHTML = ""; // clear previous data

            data.forEach(user => {
                const div = document.createElement("div");
                div.style.margin = "10px";
                div.style.padding = "10px";
                div.style.backgroundColor = "#fff";
                div.style.borderRadius = "8px";
                div.style.boxShadow = "0 0 5px rgba(0,0,0,0.2)";
                
                div.innerHTML = `
                    <strong>Name:</strong> ${user.name} <br>
                    <strong>Email:</strong> ${user.email} <br>
                    <strong>City:</strong> ${user.address.city}
                `;
                userList.appendChild(div);
            });
        })
        .catch(err => console.log("Error:", err));
});
