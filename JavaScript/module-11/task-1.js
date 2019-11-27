const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const refs = {
  start: document.querySelector("[data-action = start]"),
  stop: document.querySelector("[data-action = stop]")
};
let interval = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.start.addEventListener("click", () => {
  interval = setInterval(() => {
    document.body.style.background =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.start.setAttribute("disabled", "disabled");
  }, 1000);
});

refs.stop.addEventListener("click", () => {
  clearInterval(interval);
  refs.start.removeAttribute("disabled", "disabled");
});
