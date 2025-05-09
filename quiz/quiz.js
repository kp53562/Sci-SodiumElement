var questionIndex = 0;
var questions = ["What is sodium's element number?",
                 "How many neutrons does an atom of Sodium-23 contain?",
                 "From which compound was sodium first extracted from when it was discovered?",
                 "What visible color does sodium emit when excited in a sodium vapor lamp?",
                 "Pick the country that produces the largest amount of metallic sodium.",
                 "Enter sodium's melting point, rounded to the nearest whole number.",
                 "In what year was sodium discovered?",
                 "Who discovered sodium?"
                ];
var questionUsesRadio = [false,false,true,true,true,false,false,false];
var answers = [11,12,"option 2","option 1","option 2",98,1807,"humphry davy"];
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
  return (val == "option 1") ? document.getElementById("radio-one") : 
    ((val=="option 2") ? document.getElementById("radio-two") : document.getElementById("radio-three"));
}
function nextQuestion() {
  questionIndex++;
  if (questionIndex < questions.length){
    document.getElementById("q-hao").innerHTML = "Question "+ String(questionIndex+1) + ": ";
    document.getElementById("question").innerHTML = questions[questionIndex];
    document.getElementById("answer-box").value = "";
    if (questionUsesRadio[questionIndex]) {
      showRadios();
      if (questionIndex == 2){
        document.getElementById("rone-text").innerHTML = "Salt";
        document.getElementById("rtwo-text").innerHTML = "Lye";
        document.getElementById("rthree-text").innerHTML = "Adenine";
      }else if (questionIndex == 3){
        document.getElementById("rone-text").innerHTML = "Primarily Yellow";
        document.getElementById("rtwo-text").innerHTML = "Primarily Magenta";
        document.getElementById("rthree-text").innerHTML = "Primarily White";
      }else if (questionIndex == 4){
        document.getElementById("rone-text").innerHTML = "The Democratic Penguins Republic";
        document.getElementById("rtwo-text").innerHTML = "China";
        document.getElementById("rthree-text").innerHTML = "Australia";
      }
    }else{
      hideRadios();
      if (questionIndex == 7){
        alert("You are on the last question.");
        document.getElementById("answer-box").setAttribute("type","text");
      }else {
        document.getElementById("answer-box").setAttribute("type","number");
      }
    }
  }else{
    document.getElementById("q-hao").innerHTML = 
      "You have successfully completed all the questions! Good job.";
    document.getElementById("question").innerHTML = "";
    hideRadios();
    document.getElementById("answer-box").setAttribute("style","visibility: hidden");
  }
}
function checkAnswer() {
  if (questionIndex < questions.length) {
    if (
      (questionUsesRadio[questionIndex]) ? (answerToRadio(answers[questionIndex]).checked) : 
        ((
          (typeof(answers[questionIndex]) == "string") ? String(document.getElementById("answer-box").value).toLowerCase() : 
         document.getElementById("answer-box").value) == answers[questionIndex])
       ) {
      nextQuestion();
    }else{//q-hao = question number
      document.getElementById("q-hao").innerHTML = "Question "+ String(questionIndex+1) + ": The answer was "
        + String(answers[questionIndex]) + ".";
    }
  }
}
