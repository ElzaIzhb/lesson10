function showtext() {
  document.getElementById("txt").style.opacity ="1";
}
function changecolor() {
  document.getElementById("pict").style.border ="20px solid red";
}
function addpic() {
  document.getElementById("pict").style.transform ="scale(3)";
}
function addwidth() {
  document.getElementById("pict").style.width ="1100px";
}
function addheight() {
  document.getElementById("pict").style.height ="700px";
}
function changeborder() {
  document.getElementById("pict").style.borderRadius ="50%";
}
function hidden2() {
  document.getElementById("pict").style.display ="none";
  document.getElementById("seven1").style.display ="inline-block";
  document.getElementById("seven").style.display ="none";

}
function nothidden2() {
  document.getElementById("pict").style.display ="";
  document.getElementById("seven1").style.display ="none";
  document.getElementById("seven").style.display ="inline-block";

}

function defolt() {
  window.location.reload();
}