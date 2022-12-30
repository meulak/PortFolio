let darkmode = false;

function changedarkmode() {
    if (darkmode) {
        darkmode=false;
        document.documentElement.style.setProperty("--text-color","black");
        document.documentElement.style.setProperty("--background-color","#efe7e5");
        document.getElementById("dark/lightmode").innerHTML="Dark Mode";
    } else {
        darkmode=true;
        document.documentElement.style.setProperty("--text-color","white");
        document.documentElement.style.setProperty("--background-color","black");
        document.getElementById("dark/lightmode").innerHTML="Light Mode";
    }
    
}