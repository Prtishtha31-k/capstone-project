document.addEventListener("DOMContentLoaded", function () {

   
    const sidebarIcons = document.querySelectorAll(".sidebar .icon");

    sidebarIcons.forEach(function (icon) {
        icon.addEventListener("click", function () {
            sidebarIcons.forEach(i => i.classList.remove("active-icon"));
            icon.classList.add("active-icon");
        });
    });

   
    const greet = document.querySelector(".home-greeting");

    if (greet) {
        const hour = new Date().getHours();
        let message = "";

        if (hour < 12) {
            message = "Good Morning, Traveler!";
        } else if (hour < 18) {
            message = "Good Afternoon, Explorer!";
        } else {
            message = "Good Evening, Wanderer!";
        }

        greet.textContent = message;
    }

});