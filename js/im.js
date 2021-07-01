function change() {
    var img = document.getElementById("imageone");
    if (img.getAttribute('src') == "../image/deer.jpg") {
        img.src = "../image/ele.jpeg";
    } else if (img.getAttribute('src') == "../image/ele.jpeg") {
        img.src = "../image/rhino.jpg";
    } else if (img.getAttribute('src') == "../image/rhino.jpg") {
        img.src = "../image/mon.jpeg";
    } else if (img.getAttribute('src') == "../image/mon.jpeg") {
        img.src = "../image/lion.jpeg";
    } else if (img.getAttribute('src') == "../image/lion.jpeg") {
        img.src = "../image/deer.jpg";
    } else {
        img.src = "../image/deer.jpg";
    }
}