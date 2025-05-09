var questionIndex = 0;
var questions = ["What is sodium's element number?",
                 "How many neutrons does an atom of Sodium-23 contain?"];
var questionUsesRadio = [false,false];
var answers = [11,12];
// c++ >= java >(c# is somewhere here) javascript = python > lua
function hideRadios(){
  document.getElementById("radio-one").setAttribute("style","visibility: hidden;");
  document.getElementById("rone-text").setAttribute("style","visibility: hidden;");
  document.getElementById("radio-two").setAttribute("style","visibility: hidden;");
  document.getElementById("rtwo-text").setAttribute("style","visibility: hidden;");
  document.getElementById("radio-three").setAttribute("style","visibility: hidden;");
  document.getElementById("rthree-text").setAttribute("style","visibility: hidden;");
}
function showRadios() {  
  document.getElementById("radio-one").setAttribute("style","visibility: visible;");
  document.getElementById("rone-text").setAttribute("style","visibility: visible;");
  document.getElementById("radio-two").setAttribute("style","visibility: visible;");
  document.getElementById("rtwo-text").setAttribute("style","visibility: visible;");
  document.getElementById("radio-three").setAttribute("style","visibility: visible;");
  document.getElementById("rthree-text").setAttribute("style","visibility: visible;");
}
function answerToRadio(val){
  return (val == "r1") ? document.getElementById("radio-one") : 
    ((val=="r2") ? document.getElementById("radio-two") : document.getElementById("radio-three"));
}
function nextQuestion() {
  questionIndex++;
  if (questionUsesRadio[questionIndex]) {
    showRadios();
  }else{hideRadios();}
}
function checkAnswer() {
  if ((questionUsesRadio[questionIndex]) ? (answerToRadio(answers[questionIndex]).checked) : 
      (document.getElementById("answer-box").value == answers[questionIndex])) {
    
  }
}
