function myFuction() {
  var x = Math.floor(Math.random() * 10 + 10);
  document.getElementById("demo").innerHTML = x;
  document.getElementById("next").style.fontSize = 40;
  document.getElementById("next").innerHTML = "ENTER THE NUMBER BELOW";
  document.getElementById("reload").innerHTML = "RELOAD";
}
function myFuction2() {
  var f_input = document.getElementById("first_input").value;
  if (f_input == 12) {
    document.getElementById("winner-1").style.display = "block";
    document.getElementById("input-num").style.display = "none";
  } else if (f_input == 15) {
    document.getElementById("winner-2").style.display = "block";
    document.getElementById("input-num").style.display = "none";
  } else if (f_input == 18) {
    document.getElementById("winner-3").style.display = "block";
    document.getElementById("input-num").style.display = "none";
  } else {
    document.getElementById("blnt").style.display = "block";
    document.getElementById("input-num").style.display = "none";
  }
}
