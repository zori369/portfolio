function sleepD()
{ 
  document.getElementById("yesorno").innerHTML = "So it is not time to sleep.";
 var t= new Date();
    if (t.getHours()>=12&&t.getHours()<=16 || t.getHours()>=22&& t.getHours()<=8  )
            {document.getElementById("yesorno").innerHTML="So it is time to sleep."};
}
function checkImage()
{
if (document.getElementById("yesorno").innerHTML=="So it is time to sleep.")
document.getElementById("imgd").src = "sc3.gif";
}
function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    var t = setTimeout(currentTime, 1000); /* setting timer */
}
function updateTime(k) { /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}
currentTime();
