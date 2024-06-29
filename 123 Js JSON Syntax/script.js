const myObj = { name: "John", age: 30, city: "New York" };
document.getElementById("demo").innerHTML = myObj.name;

const myObject = { name: "John", age: 30, city: "New York" };
myObject.name = "Gilbert";
document.getElementById("demo2").innerHTML = myObject["name"];
