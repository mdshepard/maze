const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];
let playerTop = 188;
var playerLeft = 8;
var cell;
let mapDiv = document.getElementById("map");
var row;
var column;
let posX =0;
let posY =9;
let playerPos = false;
document.addEventListener("keydown", (event) => {  
    let keyName = event.key;
    if (keyName === "ArrowUp") {
        if (posY < 14 && posY > 0) { 
            if (map[posY-1][posX]===" " ) {
                posY -= 1;
                playerTop -= 20;
                document.getElementById("player").style.top = playerTop + "px";
            } 
            else if (map[posY-1][posX]==="F"){
                playerPos=true;
            }
        }
    }
    if (keyName === "ArrowDown") {
        if (posY < 14 && posY > 0) { 
   
            if (map[posY+1][posX]===" " ) {
                posY += 1;
                playerTop += 20;
                document.getElementById("player").style.top = playerTop + "px";
            } 
            else if (map[posY+1][posX]==="F"){
                playerPos=true;
            }
        }
    }
    if (keyName === "ArrowRight") {
        if (posX < 21 && posX >= 0) { 
            if (map[posY][posX+1]===" ")  {
                posX += 1;
                playerLeft += 20;
                document.getElementById("player").style.left = playerLeft + "px";
            } 
            else if (map[posY][posX+1]==="F"){
                playerPos=true;
            }

        }
    }
    if (keyName === "ArrowLeft") {
        if (posX < 21 && posX > 0) { 
            if (map[posY][posX-1]===" " ) {
                posX -= 1;
                playerLeft -= 20;
                document.getElementById("player").style.left = playerLeft + "px";
            } 
            else if (map[posY][posX-1]==="F"){
                playerPos=true;
            }
        }
    }
    if (playerPos) {
        alert("You've finished!");
        playerTop = 188;
        playerLeft = 8;
        posX = 0;
        posY = 9;
        playerPos = false;
        document.getElementById("player").style.top = playerTop + "px";
        document.getElementById("player").style.left = playerLeft + "px";

    }
    }

)

for (x = 0; x < map.length; x++) {
    row = document.createElement("div");
    row.setAttribute("class","row");
    var tmpRow=map[x];
    console.log(tmpRow);
        for (y = 0; y < tmpRow.length; y++) {
            column = document.createElement("div");
            column.setAttribute("class", "column");
            // column.textContent = tmpRow[y];
            row.appendChild(column);
            if (tmpRow[y] == "W") {
                column.style.backgroundColor = "blue";
            }
        }
    mapDiv.appendChild(row);
}



