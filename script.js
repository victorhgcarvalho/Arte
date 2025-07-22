function iniciarTransicao() {
  const slide = document.getElementById("slide");
  slide.classList.add("ativo");

  setTimeout(() => {
    window.location.href = "galeria.html";
  }, 1000); // duração da animação
}

// Corações flutuantes (opcional, só na index.html)
const intro = document.getElementById("intro");
if (intro) {
  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💙";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    intro.appendChild(heart);
  }
}
