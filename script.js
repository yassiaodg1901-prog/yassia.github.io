document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Merci ! Votre message a été envoyé 🚀");
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".cc-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
    form.reset();
  });
});

const showBtn = document.getElementById("showProject");
const projectDiv = document.getElementById("project");
const colorBtn = document.getElementById("colorBtn");

showBtn.addEventListener("click", () => {
  projectDiv.style.display = "block";
});


colorBtn.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  projectDiv.style.backgroundColor = randomColor;
});

document.getElementById("showCoin").onclick = () => {
  document.getElementById("coinGame").style.display = "block";
};

document.getElementById("flip").onclick = () => {
  document.getElementById("result").textContent =
    Math.random() > 0.5 ? "🪙 Pile !" : "🪙 Face !";
};

