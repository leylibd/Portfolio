document.addEventListener("DOMContentLoaded", function () {
  const navLinks = Array.from(document.querySelectorAll("nav a"));
  const sections = Array.from(document.querySelectorAll("section"));

  //making first link to be active
  navLinks[1].classList.add("activeSection");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      //remove activeSection class from all links???
      //   link.innerHTML +=
      //     '<img style="display: inline-block" src="icons/currentPage.svg" alt="menu open button">';
      navLinks.forEach(function (link) {
        link.classList.remove("activeSection");
        console.log(link.innerHTML);
        // link.innerHTML.replace(
        //   '<img style="display: inline-block" src="icons/currentPage.svg" alt="menu open button">',
        //   ""
        // );
      });
      //add the activeSection class to the clicked link
      this.classList.add("activeSection");
    });
  });
});

function openResume() {
  window.open(
    "file:///C:/Users/Leyli/Desktop/HCI%2022-24/2nd%20Semester/FH_Web%20development/codes/PortfolioWeb/LeyliBunyadzade-cv.pdf",
    "_blank"
  );
}

function openCubes() {
  window.open(
    "file:///C:/Users/Leyli/Desktop/HCI%2022-24/2nd%20Semester/FH_Web%20development/codes/PortfolioWeb/interactiveCubes.html"
  );
}

function dropdownToggle() {
  const dropdownContainer = document.getElementById("dropdown-container");
  document.getElementById("dropdown").classList.toggle("hidden");
  const dropdownIcon = document.getElementById("dropdown-icon");
  switch (true) {
    case dropdownIcon.src.includes("icons/menuOpened.svg"):
      dropdownIcon.src = "icons/menuClosed.svg";
      dropdownContainer.style = "background-color: transparent";
      break;

    case dropdownIcon.src.includes("icons/menuClosed.svg"):
      dropdownIcon.src = "icons/menuOpened.svg";
      dropdownContainer.style = "background-color: #28313E";
      break;
  }
}
