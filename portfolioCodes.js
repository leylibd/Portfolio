document.addEventListener("DOMContentLoaded", function () {
    const navLinks = Array.from(document.querySelectorAll('nav a'));
    const sections = Array.from(document.querySelectorAll("section"));

    //making first link to be active
    navLinks[1].classList.add("activeSection");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            //remove activeSection class from all links???
            navLinks.forEach(function (link) {
                link.classList.remove("activeSection");
            });

            //add the activeSection class to the clicked link
            this.classList.add("activeSection");
        });
    });
});