function goToCompounds() {
  try{
    window.location.href = (window.location.href+"/compounds/list.html");
  } catch (exception) {
    alert("An error: ", exception.message, " occured! Please relay this to the developer.");
  }
}
