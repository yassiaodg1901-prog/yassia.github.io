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

