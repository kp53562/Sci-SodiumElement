function goToCompounds() {
  try{
    const ref = window.location.href;
    if (ref.split((ref.length) -1) != "/"){
      window.location.href = ref + "/compounds/list.html"; }
    else{
      window.location.href = ref + "compounds/list.html";
    }
  } catch (exception) {
    alert("An error: ", exception.message, " occured! Please relay this to the developer.");
  }
}
