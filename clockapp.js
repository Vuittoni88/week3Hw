function tick()
{
    const clockTime = new Date();
    var h = clockTime.getHours();
    var m = clockTime.getMinutes();
    var s = clockTime.getSeconds();
    h = amPm(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("actualClock").innerText = h + ":" + m + ":" + s;
    setTimeout(tick, 1000);
}

function checkTime(i)
{
    if (i < 10) return "0" + 1;
    return i;
}

function amPm(j)
{
    if (j>12) return j - 12;
    return j;
}


var i = 0;
function change() {
  var doc = document.getElementById("actualClock");
  var color = ["black", "blue", "red", "lightgray"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);