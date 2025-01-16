const movieContainer = document.querySelector(".movieContainer");

movieContainer.addEventListener("mousemove", function (e) {
  const card = e.target.closest(".movieCard");
  if (card) {
    const overlay = card.querySelector(".overlay");
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -15;
    const rotateY = (x / rect.width - 0.5) * 15;

    if (overlay) {
      overlay.style.backgroundPosition = `${(x / rect.width) * 100}% ${
        (y / rect.height) * 100
      }%`;
      overlay.style.filter = "opacity(1)";
    }

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
});

movieContainer.addEventListener("mouseout", function (e) {
  const card = e.target.closest(".movieCard");
  if (card) {
    const overlay = card.querySelector(".overlay");
    if (overlay) {
      overlay.style.filter = "opacity(0)";
    }
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  }
});
