function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest();

  // what to do when response arrives
  xhr.onload = function () {
    const container = document.getElementById("demo");
    container.innerHTML = this.responseText;

    document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
    // document.getElementById("demo").innerHTML = (this.getResponseHeader("etag"));
  };

  // prepare request - methods: GET, POST, PUT, PATCH, DELETE, OPTIONS
  xhr.open("GET", "./data/data.txt");

  // add a request header
  // xhr.setRequestHeader("MY_GF", "JavaScript");

  // send request
  xhr.send();

  // abort
  // xhr.abort();
}
