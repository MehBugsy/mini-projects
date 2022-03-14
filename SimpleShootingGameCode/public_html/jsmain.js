
var p1wins = 0, p2wins = 0;
var p1health = 100, p2health = 100;
function shot() {
//    if (p1health === 100 && p2health === 100) {
//        alert("First shots fired!");
//    }
    while (p1health >= 0 && p2health >= 0) {
        var rando1 = Math.floor(Math.random() * 6), rando2 = Math.floor(Math.random() * 6);
        p1health = p1health - rando2;
        p2health = p2health - rando1;

        console.log("Shot 1: " + rando1 + "\nShot 2: " + rando2 + "\nPlayer 1 health: " + p1health + "\nPlayer 2 health: " + p2health);
//    document.getElementById("result1").innerHTML = p1wins;
//    document.getElementById("result2").innerHTML = p2wins;
    }
    if (p1health <= 0) {
        p2wins++;
        document.getElementById("result2").innerHTML = p2wins;
        p1health = 100;
        p2health = 100;
    } else if (p2health <= 0) {
        p1wins++;
        document.getElementById("result1").innerHTML = p1wins;
        p1health = 100;
        p2health = 100;
    }
    if (p1wins >= 3) {
        document.getElementById("winner").innerHTML = "Player 1 won the match!";
        document.getElementById("startbtn").disabled = true;
        document.getElementById("startbtn").style.display = "none";
        document.getElementById("btnchange").insertAdjacentHTML("afterbegin", "<input type='button' value='Reset Game' class='buttonreset' onclick='reset()' id='reserbtn'>");
    } else if (p2wins >= 3) {
        document.getElementById("winner").innerHTML = "Player 2 won the match!";
        document.getElementById("startbtn").disabled = true;
        document.getElementById("startbtn").style.display = "none";
        document.getElementById("btnchange").insertAdjacentHTML("afterbegin", "<input type='button' value='Reset Game' class='buttonreset' onclick='reset()' id='reserbtn'>");
    }
}
function reset() {
    p1wins = 0, p2wins = 0;
    p1health = 10, p2health = 10;
    document.getElementById("result1").innerHTML = "0";
    document.getElementById("result2").innerHTML = "0";
    document.getElementById("winner").innerHTML = "";
    document.getElementById("btnchange").innerHTML = "";
    document.getElementById("btnchange").insertAdjacentHTML("afterbegin", "<input type='button' value='Start Game' class='buttonstart' onclick='shot()' id='startbtn'>")
}