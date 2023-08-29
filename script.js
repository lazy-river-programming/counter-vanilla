const incrementEl = document.getElementById("increment");
const countEl = document.getElementById("count");

let count = 0;

incrementEl.addEventListener("click", () => {
  count = count + 1;
  countEl.innerText = count;
});