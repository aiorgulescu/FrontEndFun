var sidebar = document.getElementById("sidebar");
var button = document.getElementById("button");
var exitButton = document.getElementById("exit");

button.onclick = function(){
    console.log("clicked!");
    if (sidebar.style.opacity == "")
    {
        console.log("in here");
        sidebar.style.opacity = "1";
        sidebar.style.height = "300px";
        button.style.display = "none";
    }
};

exitButton.onclick = function(){

    sidebar.style.transition = "all .5s";
    sidebar.style.opacity = "";
    sidebar.style.height = "0";
    button.style.display = "block"
};