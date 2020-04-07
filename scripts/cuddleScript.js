function getHelpNow() {
    console.log('Help requested');
    var x = document.getElementById("help-now");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
} 