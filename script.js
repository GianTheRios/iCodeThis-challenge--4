const buttons = document.querySelectorAll("#btn");

buttons.forEach((connect) => {
  connect.addEventListener("click", function () {
    if (this.innerHTML === "Connect") {
      this.innerHTML = "Connected!";
      this.style.background = "#748eff";
    } else {
      this.innerHTML = "Connect";
      this.style.background = "rgb(87, 87, 233)";
    }
  });
});
