var funFactsCount=1; // not advanced enough. I need ideas!
const maxFunFactsCount=5;
function elemById(identification){
  return document.getElementById(identification);
}
function properties() {
  window.location.href="https://kp53562.github.io/Sci-SodiumElement/properties/";
}
function revealFunFacts(){
  elemById("funFactsBox").setAttribute("style","visibility: visible; background-color: #69A455; border-style: solid; border-width: 2px;");
  elemById("r"+funFactsCount.toString()).setAttribute("style","visibility: visible;");
  funFactsCount++;
  if (funFactsCount>maxFunFactsCount){
    elemById("funFactsButton").setAttribute("style","visibility: hidden;");
  }
}
function goToQuiz() {
  window.location.href="https://kp53562.github.io/Sci-SodiumElement/quiz/";
}
function relocateFunction() {
  window.location.href="https://kp53562.github.io/Sci-SodiumElement/location/";
}
