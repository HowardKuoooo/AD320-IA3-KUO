document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// alert "Welcome" when click on "cities"
document.getElementById("myheader" ).addEventListener("click", function() {
  alert(" Welcome !!");
});

// change the font color of London
document.getElementById("demoo").addEventListener("mouseover", mouseOver);
document.getElementById("demoo").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("demoo").style.color = "red";
}

function mouseOut() {
  document.getElementById("demoo").style.color = "black";
}

//resize window
window.addEventListener("resize", function(){
  document.getElementById("myWindow").innerHTML = Math.random();
});

// onchange method to uppercase characters 

document.getElementById("fname").addEventListener("change", myFunction);

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

