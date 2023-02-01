const emailBtn = document.getElementById("emailBtn");
const visitBtn = document.getElementById("visitBtn");

emailBtn.addEventListener("click", function() {
  window.location.href = "mailto:jose.rodriguez@email.com";
});

visitBtn.addEventListener("click", function() {
  window.open("http://www.joserodriguezweb.com", "_blank");
});
