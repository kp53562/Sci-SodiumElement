var funFactsCount=1; // not advanced enough. I need ideas!
const maxFunFactsCount=5;
function elemById(identification){
  return document.getElementById(identification);
}
function properties() {
  window.location.href="https://kp53562.github.io/Sci-SodiumElement/properties/";
}
function revealFunFacts(){
  elemById("r"+funFactsCount.toString()).setAttribute("style","visibility: visible;");
  funFactsCount++;
  if (funFactsCount>maxFunFactsCount){
    elemById("funFactsButton").setAttribute("style","visibility: hidden;");
  }
}

function relocateFunction() {
  window.location.href="https://kp53562.github.io/Sci-SodiumElement/location/";
}
