var tb = document.getElementById("table-body");
var ohshit = localStorage.getItem("tablesh");
if (ohshit === null) {
    localStorage.getItem("tablesh", tb.innerHTML);
} else {
    tb.innerHTML = ohshit;
}




function store() {
    var name = document.getElementById("name").value;
    var skill = document.getElementById("skill").value;
    var temp = document.getElementById("level");
    var level = temp.options[temp.selectedIndex].text;
    var comment = document.getElementById("comment").value;

    console.log(name);
    console.log(skill);
    console.log(level);
    console.log(comment);

    tb.innerHTML += ("<tr><td>" + name + "</td><td>" + skill + "</td><td>" + level + "</td><td>" + comment + "</td></tr>");
    console.log(tb);
    localStorage.removeItem("tablesh");
    localStorage.setItem("tablesh", tb.innerHTML);
}