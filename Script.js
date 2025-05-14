function showHome() {
  document.getElementById("homeSection").style.display = "block";
  document.getElementById("appsSection").style.display = "none";
}

function showApps() {
  document.getElementById("homeSection").style.display = "none";
  document.getElementById("appsSection").style.display = "block";
}

function searchApp() {
  let query = document.getElementById("searchInput").value.toLowerCase();
  let apps = document.querySelectorAll("#suggestedApps li");
  apps.forEach(app => {
    app.style.display = app.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
}