function setLocalStorage(key, value) {
    alert(localStorage.setItem(key, value));
}

function getLocalStorage(key) {
    alert(localStorage.getItem(key));
}

function removeLocalStorage(key) {
    alert(localStorage.removeItem(key));
}

function clearLocalStorage() {
    localStorage.clear();
}