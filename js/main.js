fetch("components/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    const toggle = document.querySelector(".navbar__toggle");
    const menu = document.querySelector(".navbar__menu");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("navbar__menu--active");
    });
  });

fetch("components/about.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("about").innerHTML = data));

fetch("components/experience.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("experience").innerHTML = data));

fetch("components/projects.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("projects").innerHTML = data));

fetch("components/contact.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("contact").innerHTML = data));

fetch("components/footer.html")
  .then((res) => res.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));
