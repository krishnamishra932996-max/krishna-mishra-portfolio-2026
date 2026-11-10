const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
});

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {
  const pageBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 50;

  topButton.style.display = pageBottom ? "block" : "none";
});

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
document.getElementById("currentYear").textContent = new Date().getFullYear();