const root = document.documentElement;
const button = document.getElementById("theme-toggle");

button.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme;
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;

  localStorage.setItem("theme", next);
  button.textContent = next === "dark" ? "Light Mode" : "Dark Mode"
});