
const loginForm = document.querySelector(".login-form");


if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        
        const email = document.getElementById("email");
        const password = document.getElementById("password");

       
        if (email.value.trim() === "" || password.value.trim() === "") {
            event.preventDefault();
            alert("Please fill in all fields.");
        } else {
            alert("Logged in successfully!");
        }
    });
}