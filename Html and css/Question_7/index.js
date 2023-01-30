let value = 0;

const slider = document.querySelector(".slider");
document.querySelector(".right").addEventListener("click", () => {
  if (value < 3) {
    value++;
  }
  slider.style.transform = "translate(" + value * -25 + "%";
});

document.querySelector(".left").addEventListener("click", () => {
  if (value > 0) {
    value--;
  }
  slider.style.transform = "translate(" + value * -25 + "%";
});
