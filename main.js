var funFactsCount=1; // not advanced enough. I need ideas!
const maxFunFactsCount=5;
function elemById(identification){
  return document.getElementById(identification);
}
function properties() {
  window.location.href="https://kp53562.github.io/Sci-SodiumElement/properties/";
}
function location() {
  try{
  window.location.href="https://kp53562.github.io/Sci-SodiumElement/location/"
  }catch(exception){
    alert(exception);
  }
}
function revealFunFacts(){
  elemById("r"+funFactsCount.toString()).setAttribute("style","visibility: visible;");
  funFactsCount++;
  if (funFactsCount>maxFunFactsCount){
    elemById("funFactsButton").setAttribute("style","visibility: hidden;");
  }
}
