const targetNumber = document.getElementById("number");
const btn = document.getElementById("toggle");

btn.onclick = function () {
    if (targetNumber.style.display !== "none") {
      targetNumber.style.display = "none";
    } else {
      targetNumber.style.display = "block";
    }
  };
  