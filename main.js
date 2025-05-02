function goToCompounds() {
  try{
    var ref = window.location.href.toString();
    window.location.href = (ref.split((ref.length) -1)==/) ? (window.location.href+"compounds/list.html") : (window.location.href+"/compounds/list.html");
  } catch (exception) {
    alert("An error: ", exception.message, " occured! Please relay this to the developer.");
  }
}
