//Retriving the Values for Both the Input Fields
var fno = document.getElementById("first");
var lno = document.getElementById("last");

//Retrieving the Button Elements by Id
n = document.getElementById("btn1");
r = document.getElementById("btn2");
e = document.getElementById("btn3");
document.getElementById("ins").onmouseover = function () {
  document.getElementById("container4").style.display = "block";
}
document.getElementById("ins").onmouseout = function () {
  document.getElementById("container4").style.display = "none";
}
document.getElementById("sm").onmouseover = function () {
  document.getElementById("container4").style.display = "block";
}
document.getElementById("sm").onmouseout = function () {
  document.getElementById("container4").style.display = "none";
}


//onclick event for Execute Button
e.onclick = function () {
  var option = document.getElementById("op").value;
  if (fno.value == "") {
    alert("Please Enter The Number 1");
  }
  if (lno.value == "") {
    alert("Please Enter The Number 2");
  }
  if (option == "") {
    alert("Please Select Operation");
  }
  if ((option != "") && (fno.value != "") && (lno.value != "")) {
    if (option == "add") {
      document.getElementById("add").style.display = "block";
    }
    else if (option == "sub") {
      document.getElementById("sub").style.display = "block";
    }
    else if (option == "mul") {
      document.getElementById("mul").style.display = "block";
    }
    else if (option == "div") {
      document.getElementById("div").style.display = "block";
    }
  }
}
var i = 0;
//onclick event for Start Button
n.onclick = function () {
  var v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  var option = document.getElementById("op").value;
  if (option == "add") {
    var c = parseInt(fno.value) + parseInt(lno.value);
    if (v[i] == 4) {
      document.getElementById("r4c1").style.display = "inline-block";
      document.getElementById("r4c2").style.display = "inline-block";
      document.getElementById("b1").classList.add("fullSizebox");
      document.getElementById("r4c8").style.display = "inline-block";
      document.getElementById("r4c3").style.display = "inline-block";
      document.getElementById("r4c4").style.display = "inline-block";
      document.getElementById("b2").classList.add("fullSizebox");
      document.getElementById("r4c9").style.display = "inline-block";
      document.getElementById("r4c5").style.display = "inline-block";
      document.getElementById("r4c6").style.display = "inline-block";
      document.getElementById("b3").classList.add("fullSizebox");
      document.getElementById("r4c10").style.display = "inline-block";
      document.getElementById("r4c7").style.display = "block";
      document.getElementById("a3").style.color = "#46f507";
      document.getElementById("a4").style.color = "#f50707";

    }
    else if (v[i] == 5) {
      document.getElementById("r1c1").style.display = "inline-block";
      document.getElementById("a4").style.color = "#46f507";
      document.getElementById("a5").style.color = "#f50707";

    }
    else if (v[i] == 6) {
      document.getElementById("a5").style.color = "#46f507";
      document.getElementById("a6").style.color = "#f50707";
      document.getElementById("r1c2").innerHTML = fno.value;
      document.getElementById("b1").innerHTML = fno.value;

    }
    else if (v[i] == 7) {
      document.getElementById("r2c1").style.display = "inline-block";
      document.getElementById("a6").style.color = "#46f507";
      document.getElementById("a7").style.color = "#f50707";

    }
    else if (v[i] == 8) {
      document.getElementById("a7").style.color = "#46f507";
      document.getElementById("a8").style.color = "#f50707";
      document.getElementById("r2c2").innerHTML = lno.value;
      document.getElementById("b2").innerHTML = lno.value;

    }
    else if (v[i] == 9) {
      document.getElementById("a8").style.color = "#46f507";
      document.getElementById("a9").style.color = "#f50707";
      document.getElementById("b3").innerHTML = String(c);

    }
    else if (v[i] == 10) {
      document.getElementById("r3c1").style.display = "inline-block";
      document.getElementById("a9").style.color = "#46f507";
      document.getElementById("a10").style.color = "#f50707";
      document.getElementById("r3c5").innerHTML = String(c);

    }
    else if (v[i] == 12) {
      document.getElementById("a" + String(v[i] - 1)).style.color = "#46f507";
    }
    else if (v[i] == 13) {
      alert('Program Completed');
    }
    else {
      if (v[i] == 1)
        document.getElementById("a" + String(v[i])).style.color = "#f50707";
      else {
        document.getElementById("a" + String(v[i] - 1)).style.color = "#46f507";
        document.getElementById("a" + String(v[i])).style.color = "#f50707";
      }
    }
    i++;
  }
  else if (option == "sub") {
    var c = parseInt(fno.value) - parseInt(lno.value);
    if (v[i] == 4) {
      document.getElementById("r4c1").style.display = "inline-block";
      document.getElementById("r4c2").style.display = "inline-block";
      document.getElementById("b1").classList.add("fullSizebox");
      document.getElementById("r4c8").style.display = "inline-block";
      document.getElementById("r4c3").style.display = "inline-block";
      document.getElementById("r4c4").style.display = "inline-block";
      document.getElementById("b2").classList.add("fullSizebox");
      document.getElementById("r4c9").style.display = "inline-block";
      document.getElementById("r4c5").style.display = "inline-block";
      document.getElementById("r4c6").style.display = "inline-block";
      document.getElementById("b3").classList.add("fullSizebox");
      document.getElementById("r4c10").style.display = "inline-block";
      document.getElementById("r4c7").style.display = "block";
      document.getElementById("r4c7").style.display = "block";
      document.getElementById("s3").style.color = "#46f507";
      document.getElementById("s4").style.color = "#f50707";

    }
    else if (v[i] == 5) {
      document.getElementById("r1c1").style.display = "inline-block";
      document.getElementById("s4").style.color = "#46f507";
      document.getElementById("s5").style.color = "#f50707";

    }
    else if (v[i] == 6) {
      document.getElementById("s5").style.color = "#46f507";
      document.getElementById("s6").style.color = "#f50707";
      document.getElementById("r1c2").innerHTML = fno.value;
      document.getElementById("b1").innerHTML = fno.value;

    }
    if (v[i] == 7) {
      document.getElementById("r2c1").style.display = "inline-block";
      document.getElementById("s6").style.color = "#46f507";
      document.getElementById("s7").style.color = "#f50707";

    }
    if (v[i] == 8) {
      document.getElementById("s7").style.color = "#46f507";
      document.getElementById("s8").style.color = "#f50707";
      document.getElementById('r2c2').innerHTML = lno.value;
      document.getElementById("b2").innerHTML = lno.value;

    }
    else if (v[i] == 9) {
      document.getElementById("s8").style.color = "#46f507";
      document.getElementById("s9").style.color = "#f50707";
      document.getElementById("b3").innerHTML = String(c);

    }
    else if (v[i] == 10) {
      document.getElementById("r3c2").style.display = "inline-block";
      document.getElementById("s9").style.color = "#46f507";
      document.getElementById("s10").style.color = "#f50707";
      document.getElementById("r3c5").innerHTML = String(c);
      document.getElementById("b3").innerHTML = String(c);

    }
    else if (v[i] == 12) {
      document.getElementById("s" + String(v[i] - 1)).style.color = "#46f507";
    }
    else if (v[i] == 13) {
      alert('Program Completed');
    }
    else {
      if (v[i] == 1)
        document.getElementById("s" + String(v[i])).style.color = "#f50707";
      else {
        document.getElementById("s" + String(v[i] - 1)).style.color = "#46f507";
        document.getElementById("s" + String(v[i])).style.color = "#f50707";
      }
    }
    i++;
  }
  else if (option == "mul") {
    var c = parseInt(fno.value) * parseInt(lno.value);
    if (v[i] == 4) {
      document.getElementById("r4c1").style.display = "inline-block";
      document.getElementById("r4c2").style.display = "inline-block";
      document.getElementById("b1").classList.add("fullSizebox");
      document.getElementById("r4c8").style.display = "inline-block";
      document.getElementById("r4c3").style.display = "inline-block";
      document.getElementById("r4c4").style.display = "inline-block";
      document.getElementById("b2").classList.add("fullSizebox");
      document.getElementById("r4c9").style.display = "inline-block";
      document.getElementById("r4c5").style.display = "inline-block";
      document.getElementById("r4c6").style.display = "inline-block";
      document.getElementById("b3").classList.add("fullSizebox");
      document.getElementById("r4c10").style.display = "inline-block";
      document.getElementById("r4c7").style.display = "block";
      document.getElementById("r4c7").style.display = "block";
      document.getElementById("m3").style.color = "#46f507";
      document.getElementById("m4").style.color = "#f50707";

    }
    else if (v[i] == 5) {
      document.getElementById("r1c1").style.display = "inline-block";
      document.getElementById("m4").style.color = "#46f507";
      document.getElementById("m5").style.color = "#f50707";

    }
    else if (v[i] == 6) {
      document.getElementById("m5").style.color = "#46f507";
      document.getElementById("m6").style.color = "#f50707";
      document.getElementById("r1c2").innerHTML = fno.value;
      document.getElementById("b1").innerHTML = fno.value;

    }
    if (v[i] == 7) {
      document.getElementById("r2c1").style.display = "inline-block";
      document.getElementById("m6").style.color = "#46f507";
      document.getElementById("m7").style.color = "#f50707";

    }
    if (v[i] == 8) {
      document.getElementById("m7").style.color = "#46f507";
      document.getElementById("m8").style.color = "#f50707";
      document.getElementById('r2c2').innerHTML = lno.value;
      document.getElementById("b2").innerHTML = lno.value;

    }
    else if (v[i] == 9) {
      document.getElementById("m8").style.color = "#46f507";
      document.getElementById("m9").style.color = "#f50707";
      document.getElementById("b3").innerHTML = String(c);

    }
    else if (v[i] == 10) {
      document.getElementById("r3c3").style.display = "inline-block";
      document.getElementById("m9").style.color = "#46f507";
      document.getElementById("m10").style.color = "#f50707";
      document.getElementById("r3c5").innerHTML = String(c);
      document.getElementById("b3").innerHTML = String(c);

    }
    else if (v[i] == 12) {
      document.getElementById("m" + String(v[i] - 1)).style.color = "#46f507";
    }
    else if (v[i] == 13) {
      alert('Program Completed');
    }
    else {
      if (v[i] == 1)
        document.getElementById("m" + String(v[i])).style.color = "#f50707";
      else {
        document.getElementById("m" + String(v[i] - 1)).style.color = "#46f507";
        document.getElementById("m" + String(v[i])).style.color = "#f50707";
      }
    }
    i++;
  }
  else if (option == "div") {
    if (parseInt(lno.value) == 0) {
      document.getElementById("r1c1").style.display = "inline-block";
      document.getElementById("r1c1").innerHTML = "Divisible by Zero Error!";
      i = 12;
    }
    else
      var c = parseInt(fno.value) / parseInt(lno.value);
    if (v[i] == 4) {
      document.getElementById("r4c1").style.display = "inline-block";
      document.getElementById("r4c2").style.display = "inline-block";
      document.getElementById("b1").classList.add("fullSizebox");
      document.getElementById("r4c8").style.display = "inline-block";
      document.getElementById("r4c3").style.display = "inline-block";
      document.getElementById("r4c4").style.display = "inline-block";
      document.getElementById("b2").classList.add("fullSizebox");
      document.getElementById("r4c9").style.display = "inline-block";
      document.getElementById("r4c5").style.display = "inline-block";
      document.getElementById("r4c6").style.display = "inline-block";
      document.getElementById("b3").classList.add("fullSizebox");
      document.getElementById("r4c10").style.display = "inline-block";
      document.getElementById("r4c7").style.display = "block";
      document.getElementById("r4c7").style.display = "block";
      document.getElementById("d3").style.color = "#46f507";
      document.getElementById("d4").style.color = "#f50707";

    }
    else if (v[i] == 5) {
      document.getElementById("r1c1").style.display = "inline-block";
      document.getElementById("d4").style.color = "#46f507";
      document.getElementById("d5").style.color = "#f50707";

    }
    else if (v[i] == 6) {
      document.getElementById("d5").style.color = "#46f507";
      document.getElementById("d6").style.color = "#f50707";
      document.getElementById("r1c2").innerHTML = fno.value;
      document.getElementById("b1").innerHTML = fno.value;

    }
    if (v[i] == 7) {
      document.getElementById("r2c1").style.display = "inline-block";
      document.getElementById("d6").style.color = "#46f507";
      document.getElementById("d7").style.color = "#f50707";

    }
    if (v[i] == 8) {
      document.getElementById("d7").style.color = "#46f507";
      document.getElementById("d8").style.color = "#f50707";
      document.getElementById('r2c2').innerHTML = lno.value;
      document.getElementById("b2").innerHTML = lno.value;

    }
    else if (v[i] == 9) {
      document.getElementById("d8").style.color = "#46f507";
      document.getElementById("d9").style.color = "#f50707";
      document.getElementById("b3").innerHTML = String(c);

    }
    else if (v[i] == 10) {
      document.getElementById("r3c4").style.display = "inline-block";
      document.getElementById("d9").style.color = "#46f507";
      document.getElementById("d10").style.color = "#f50707";
      document.getElementById("r3c5").innerHTML = String(parseInt(c));
      document.getElementById("b3").innerHTML = String(parseInt(c));

    }
    else if (v[i] == 12) {
      document.getElementById("d" + String(v[i] - 1)).style.color = "#46f507";
    }
    else if (v[i] == 13) {
      alert('Program Completed');
    }
    else {
      if (v[i] == 1)
        document.getElementById("d" + String(v[i])).style.color = "#f50707";
      else {
        document.getElementById("d" + String(v[i] - 1)).style.color = "#46f507";
        document.getElementById("d" + String(v[i])).style.color = "#f50707";
      }
    }
    i++;
  }
}

//onclick event for Reset Button
r.onclick = function () {
  window.location.reload(true);
}