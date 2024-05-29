let myWindow;
// select dom element
const width = document.getElementById("width");
const height = document.getElementById("height");

// show window object properties
width.innerHTML = "window inner width is: " + window.innerWidth;
height.innerHTML = "window inner height is: " + window.innerHeight;

function openWindow() {
    myWindow = window.open("https://google.com");
}

function closeWindow() {
    myWindow.close();
}
