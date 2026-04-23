
function toggleDark() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkmode", "on");
  } else {
    localStorage.setItem("darkmode", "off");
  }
}

document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // DARKMODE
  // =========================
  if (localStorage.getItem("darkmode") === "on") {
    document.body.classList.add("dark");
  }

  // =========================
  // NAVIGATION LADEN (MOBILE SAFE)
  // =========================
  fetch("nav.html")
    .then(res => {
      if (!res.ok) throw new Error("Nav nicht gefunden");
      return res.text();
    })
    .then(data => {
      const nav = document.getElementById("nav");
      if (nav) {
        nav.innerHTML = data;
      }
    })
    .catch(err => {
      console.warn("Navigation Fehler:", err);
    });

  // =========================
  // BACK BUTTON (SAFE)
  // =========================
  const page = location.pathname.split("/").pop();

  if (page && page !== "index.html") {
    const backBtn = document.createElement("div");
    backBtn.className = "back-box";
    backBtn.innerHTML = "⬅ Zurück";

    backBtn.onclick = function () {
      history.back();
    };

    document.body.appendChild(backBtn);
  }

});


// =========================
// ADMIN LOGIN
// =========================
function openAdmin() {
  let pw = prompt("🔐 Admin Passwort eingeben:");

  if (pw === "1234Jl2009Hallo12") {
    window.location.href = "admin.html";
  } else {
    alert("Falsches Passwort!");
  }
}