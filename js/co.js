var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 1;
    localStorage.setItem("on_load_counter", n);
} else {
    n++;
    localStorage.setItem("on_load_counter", n);
}
document.getElementById('Counter').innerHTML += "visits till now : " + n;