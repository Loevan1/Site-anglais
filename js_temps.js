
function afficherTextePresent() {
    const textePr = document.getElementById("present");
    const textePs = document.getElementById("passe");
    const texteFr = document.getElementById("futur");
    textePs.style.display = "none";
    textePr.style.display = "block";
    texteFr.style.display = "none";
}

function afficherTextePasse() {
    const textePr = document.getElementById("present");
    const textePs = document.getElementById("passe");
    const texteFr = document.getElementById("futur");
    textePs.style.display = "block";
    textePr.style.display = "none";
    texteFr.style.display = "none";
}

function afficherTexteFutur() {
    const textePr = document.getElementById("present");
    const textePs = document.getElementById("passe");
    const texteFr = document.getElementById("futur");
    textePs.style.display = "none";
    textePr.style.display = "none";
    texteFr.style.display = "block";
}