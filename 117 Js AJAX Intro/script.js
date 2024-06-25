function loadData() {
    // Create a new request
    const xhr = new XMLHttpRequest();

    // What to do when response arrives
    xhr.onload = function() {
        const container = document.getElementById('demo');
        demo.innerHTML = xhr.responseText;
    };

    // Prepare request - method: GET, POST, PUT, PATCH, DELETE, OPTIONS
    xhr.open("GET", "./data/data.txt");
    // Send request
    xhr.send();
}
