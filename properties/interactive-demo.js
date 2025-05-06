function startInteraction(){
  document.getElementById("demo-image").setAttribute("src","../assets/sodium-cut-2.png");
  document.getElementById("demo-two").setAttribute("style","visibility: visible;");
  document.getElementById("action-button").innerHTML = "Reload the demo";
  document.getElementById("action-button").setAttribute("onclick","refreshInteractiveExperience()");
}
function refreshInteractiveExperience(){
  window.location.reload();
}
