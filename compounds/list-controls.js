function elemFromID(id){
  return document.getElementById(id);
}
function hideOrShowList(listID){
  var listE = elemFromID(String(listID));
  var imgE = elemFromID(String(listID) + "b");
  var showList = true;
  if (imgE.getAttribute("alt")=="Expand"){showList = false;}
  if (showList == false){
    listE.setAttribute("style","position: static; visibility: visible;");
    imgE.setAttribute("src","../assets/hide-list_button.png");
    imgE.setAttribute("alt","Collapse");
  }else{
    listE.setAttribute("style","position: absolute; visibility: hidden;");
    imgE.setAttribute("src","../assets/expand-list_button.png");
    imgE.setAttribute("alt","Expand");
  }
}
