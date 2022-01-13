var i = 0;
var j = 0;
var firstTxt = 'Web-Developer';
var secondTxt = 'Portfolio';
var speed = 360;

function typeWriter() {

    if (i < firstTxt.length) {
      document.getElementById("top-title").innerHTML += firstTxt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    if (i == firstTxt.length && j < secondTxt.length) {
      document.getElementById("bottom-title").innerHTML += secondTxt.charAt(j);
      j++;
      setTimeout(typeWriter, speed);
    }
}