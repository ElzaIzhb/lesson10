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
//не получилось
function chabgeborder() {
  document.getElementById("pict").style.borderRadius ="50px";
}
//не получилось
function hidden() {
  document.getElementById("pict").style.display ="none";
  document.getElementsByClassName('pic')[0].style.display = "none"
}


function defolt() {
  window.location.reload();
}