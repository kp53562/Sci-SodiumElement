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
  document.getElementById("answer-box").setAttribute("style","visibility: visible;");
}
function showRadios() {  
  document.getElementById("radio-one").setAttribute("style","visibility: visible;");
  document.getElementById("rone-text").setAttribute("style","visibility: visible;");
  document.getElementById("radio-two").setAttribute("style","visibility: visible;");
  document.getElementById("rtwo-text").setAttribute("style","visibility: visible;");
  document.getElementById("radio-three").setAttribute("style","visibility: visible;");
  document.getElementById("rthree-text").setAttribute("style","visibility: visible;");
  document.getElementById("answer-box").setAttribute("style","visibility: hidden;");
}
function answerToRadio(val){
  return (val == "option1") ? document.getElementById("radio-one") : 
    ((val=="option2") ? document.getElementById("radio-two") : document.getElementById("radio-three"));
}
function nextQuestion() {
  questionIndex++;
  if (questionIndex < questions.length){
    document.getElementById("q-hao").innerHTML = "Question "+ String(questionIndex+1) + ": ";
    document.getElementById("question").innerHTML = questions[questionIndex];
    if (questionUsesRadio[questionIndex]) {
      showRadios();
    }else{hideRadios();}
  }else{
    document.getElementById("q-hao").innerHTML = "You have successfully completed all the questions!";
    hideRadios();
    document.getElementById("answer-box").setAttribute("style","visibility: hidden");
  }
}
function checkAnswer() {
  if (questionIndex < questions.length) {
    if ((questionUsesRadio[questionIndex]) ? (answerToRadio(answers[questionIndex]).checked) : 
        (document.getElementById("answer-box").value == answers[questionIndex])) {
      nextQuestion();
    }else{//q-hao = question number
      document.getElementById("q-hao").innerHTML = "Question "+ String(questionIndex+1) + ": the answer was "
        + String(answers[questionIndex]) + ".";
    }
  }
}
