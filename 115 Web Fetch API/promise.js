const display = document.getElementById("display");
function getData() {
  fetch("http://127.0.0.1:5500/115%20Web%20Fetch%20API/data.txt")
    .then((res) => res.text())
    .then((data) => {
      display.innerText = data;
    });
}
