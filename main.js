var funFactsCount=1; // not advanced enough. I need ideas!
function elemById(identification){
  return document.getElementById(identification);
}
function properties() {
  window.location.href="https://kp53562.github.io/Sci-SodiumElement/properties/";
}
function revealFunFacts(){
  alert(funFactsCount);
  elemById("r"+funFactsCount.toString()).setAttribute("style","visibility: visible;");
  funFactsCount++;
  alert(funFactsCount);
  if (funFactsCount>3){
    elemById("funFactsButton").setAttribute("style","visibility: hidden;");
  }
}
