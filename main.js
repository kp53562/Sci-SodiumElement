function goToCompounds() {
  try{
    if((window.location.href).slice(window.location.href.length-1) == "/"){
      window.location.href = window.location.href + "compounds/list.html";
    }else {
      window.location.href = window.location.href + "/compounds/list.html"; 
    }
  } catch (exception) {
    alert("An error: ", exception.message, " occured! Please relay this to the developer.");
  }
}
