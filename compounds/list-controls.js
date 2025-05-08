function elemFromID(id){
  return document.getElementById(id);
}
function hideOrShowList(listID){
  var stringID = String(listID);
  var listE = elemFromID(stringID);
  var imgE = elemFromID(stringID + "b");
  var showList = false;
  if (imgE.getAttribute("src")=="..assets/expand-list_button.png"){showList = true;}
  if (showList == false){
    listE.setAttribute("style","position: absolute; visibility: hidden;");
    imgE.setAttribute("src","..assets/hide-list_button.png");
  }else{
    listE.setAttribute("style","position: static; visibility: visible;");
    imgE.setAttribute("src","..assets/show-list_button.png");
  }
}
