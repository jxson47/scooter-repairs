function toggleDark() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkmode", "on");
  } else {
    localStorage.setItem("darkmode", "off");
  }
}

window.onload = function() {
  if (localStorage.getItem("darkmode") === "on") {
    document.body.classList.add("dark");
  }
}