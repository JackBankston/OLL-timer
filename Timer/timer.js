//timer.js
timing = false;
var myVar;
displayScramble(reverseScramble(document.getElementById("scramble").textContent));

var textFromFile;

readTextFile("Oll_Algs.csv");

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200)
            {
                textFromFile = rawFile.responseText;
                alert(textFromFile);
            }
        }
    }
    rawFile.send(null);
}

//Starting timer on space.
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //Start timer
        if(timing === false){
          time();
        }
        timing = !timing;
    }
}
document.body.onkeydown = function(e){
  if(e.keyCode == 32){
    if(timing === true){
      clearInterval(myVar);
    }
    else{
      displayTime("0","0","0");
      document.getElementById("time").style = "color:LimeGreen";
    }
  }
}

function displayTime(secondsVal, decisecondsVal, centisecondsVal){
  document.getElementById("seconds").textContent = secondsVal;
  document.getElementById("deciseconds").textContent = decisecondsVal;
  document.getElementById("centiseconds").textContent = centisecondsVal;
}

function displayScramble(scramble){
  document.getElementById("scramble").textContent = scramble.join(" ");
}

function incrementCentiseconds(){
  centiValue = document.getElementById("centiseconds").textContent;
  deciValue = document.getElementById("deciseconds").textContent;
  secondsValue = document.getElementById("seconds").textContent;
  
  centiInt = parseInt(centiValue);
  centiInt++;

  if(centiInt == 10){
    centiInt = 0;
    deciInt = parseInt(deciValue);
    deciInt++;
    if(deciInt == 10){
      deciInt = 0;
      secondsInt = parseInt(secondsValue);
      secondsInt++;
      secondsValue = secondsInt.toString();
    }
    deciValue = deciInt.toString();
  }
  
  centiValue = centiInt.toString();
  displayTime(secondsValue,deciValue,centiValue);
}

function time(){
  //Continually increment the time on screen until space is pressed.
  document.getElementById("time").style = "color:white";
  myVar = setInterval(incrementCentiseconds, 10);
}

function reverseScramble(scramble){
  var reversedScramble = scramble.split(" ");

  if(reversedScramble[0] == "y" || reversedScramble[0] == "y'" || reversedScramble[0] == "y2"){
    reversedScramble.splice(0,1);
  }
  
  for(i = 0; i < reversedScramble.length; i++){
    reversedScramble[i] = reverseTurn(reversedScramble[i]);
  }
  
  //Append a "U", "U'", or "U2" (or nothing)
  var uInt = Math.floor((Math.random() * 4));
  switch(uInt){
    case 0:
      reversedScramble.push("U");
      break;
    case 1:
      reversedScramble.push("U'");
      break;
    case 2:
      reversedScramble.push("U2");
      break;
  }
  
  return reversedScramble;
}

function reverseTurn(turn){
  switch(turn){
    case "R":
      return "R'";
    case "R'":
      return "R";
    case "L":
      return "L'";
    case "L'":
      return "L";
    case "U":
      return "U'";
    case "U'":
      return "U";
    case "D":
      return "D'";
    case "D'":
      return "D";
    case "F":
      return "F'";
    case "F'":
      return "F";
    case "B":
      return "B'";
    case "B'":
      return "B";
    case "r":
      return "r'";
    case "r'":
      return "r";
    case "l":
      return "l'";
    case "l'":
      return "l";
    case "u":
      return "u'";
    case "u'":
      return "u";
    case "d":
      return "d'";
    case "d'":
      return "d";
    case "f":
      return "f'";
    case "f'":
      return "f";
    case "b":
      return "b'";
    case "b'":
      return "b";
    case "M":
      return "M'";
    case "M'":
      return "M";
    default:
      return turn;
  }
}