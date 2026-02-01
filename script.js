const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");
const celebration = document.getElementById("celebration");
const foodSection = document.getElementById("foodSection");
const foodResult = document.getElementById("foodResult");

yesBtn.addEventListener("click", () => {
  yesBtn.addEventListener("click", () => {
  window.location.href = "celebration.html";
});


  // show food menu after 1 second
  setTimeout(() => {
    foodSection.classList.remove("hidden");
  }, 1000);
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Food selection
document.querySelectorAll(".food-item").forEach(item => {
  item.addEventListener("click", () => {
    foodResult.textContent = `Yayyy 😋 We'll eat ${item.textContent}! ❤️`;
  });
});
