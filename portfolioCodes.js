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


function openResume() {
      window.open("file:///C:/Users/Leyli/Desktop/HCI%2022-24/2nd%20Semester/FH_Web%20development/codes/PortfolioWeb/LeyliBunyadzade-cv.pdf", "_blank");
};

function openCubes() {
      window.open("file:///C:/Users/Leyli/Desktop/HCI%2022-24/2nd%20Semester/FH_Web%20development/codes/PortfolioWeb/interactiveCubes.html", "_blank");
};