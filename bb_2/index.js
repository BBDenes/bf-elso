const t = document.getElementById("puzzle")
let table;
let len;
let canPlace = false;
<<<<<<< HEAD
var redPlaceable = [];
var bluePlaceable = [];
=======
var array = [];
var canPut = "blue";
var deff = "red";

>>>>>>> 1f5d0576d7dc20be72d49c9e6994d0341eabf749


function CheckInput() {
    let x = document.getElementById("in").value;
    //isNaN(x) ? alert("Számot üss be!") : x%2 ==0 ? alert("Páros számot üss be!") : len=x FillTable(x, x);
    if (isNaN(x)){
        alert("Számot írj be!");
    }else if(x%2 != 0) {
        alert("Páros számot írj be")
    }else if (x < 4) {
        alert("Négynél nagyobb számot írj be!")
    }else{
        len = x;
        FillTable(x, x);
    }
}

function FillTable(row, col) {
<<<<<<< HEAD
    table = new Array(row);
    let startingPosRed = [row/2-1, col/2-1];
    let startingPosBlue = [row/2-1, col/2];
    //console.log(startingPosRed);
    //console.log(startingPosBlue);
    for (let i = 0; i < col; i++) {
        table[i] = new Array(row);
    }
    t.innerHTML = ""
=======
    window.array = [];
>>>>>>> 1f5d0576d7dc20be72d49c9e6994d0341eabf749
    for (let i = 0; i < row; i++) {
        window.array.push([]);
        for (let j = 0; j < col; j++){
<<<<<<< HEAD
            if ((i==startingPosRed[0]&&j==startingPosRed[1]) || (i==startingPosRed[0]+1&&j==startingPosRed[1]+1)) {
                msg += `<td><span id=${i*col + j} class="red" onmouseover="Check(${i*col + j})" style="height: 30px; width: 30px; background-color: red;border-radius: 50%; display: inline-block;"></span></td>`;
            } else if((i==startingPosBlue[0]&&j==startingPosBlue[1]) || (i==startingPosBlue[0]+1&&j==startingPosBlue[1]-1)) {
                msg += `<td><span id=${i*col + j} class="blue" onmouseover="Check(${i*col + j})" style="height: 30px; width: 30px; background-color: blue;border-radius: 50%; display: inline-block;"></span></td>`;
            }else{
                msg += `<td><span id=${i*col + j} class="blank" onmouseover="Check(${i*col + j})" style="height: 30px; width: 30px; background-color: grey;border-radius: 50%; display: inline-block;">${i*col+j}</span></td>`;
            }
            
            
        }
        msg += `</tr>`;
        t.innerHTML += msg;
        //console.log(document.getElementById(3).innerHTML);
=======
            window.array[i].push({color : false, y : i, x : j, isItFree : true, worth : 0, selected : false});
        }
>>>>>>> 1f5d0576d7dc20be72d49c9e6994d0341eabf749
    }
    array[len/2-1][len/2-1].color = "red";
    array[len/2][len/2].color  = "red";
    array[len/2][len/2-1].color  = "blue";
    array[len/2-1][len/2].color  = "blue";
    load(array);
    canPlace = true;
}

<<<<<<< HEAD
function Check(index){
    let current = document.getElementById(index).innerHTML;
    //console.log(x);
    let target = {
        left: document.getElementById(index - 1),
        right: document.getElementById(index + 1),
        top: document.getElementById(index - len),
        bottom: document.getElementById(index + len)
    };
    if(target.left.className == "blue"){
        console.log("Lehet rakni pirosat")
    }
=======
function put(x,y){
    console.log(Check(x,y));
}

function Check(x,y){
    for (let i = 0; i < window.array.length; i++) {
        for (let j = 0; j < window.array[i].length; j++){
            if (window.array[i][j].selected){window.array[i][j].selected = false; document.getElementById(window.array[i][j].id).padding = "2px"}
        }
    }
    if (!window.array[x][y].color && ((x > 0 ? window.array[x-1][y].color == window.canPut : false) || (y > 0 ? window.array[x][y-1].color == window.canPut : false) || (x < window.array.length-1 ? window.array[x+1][y].color == window.canPut : false) || (window.array[x].length-1 > y ? window.array[x][y+1].color == window.canPut : false))){
        for (let i = 0; i < window.array[x].length; i++){if (window.array[x][i].color == deff){window.array[x][y].selected = true;}}
        for (let i = 0; i < window.array.length; i++){if (window.array[i][y].color == deff){window.array[x][y].selected = true;}}
        for (let i = x; i < window.array.length; i++){for (let k = y; k < window.array[i].length; k++){if (window.array[i][k].color == deff){window.array[x][y].selected = true;}}}
        for (let i = x; i > 0; i--){for (let k = y; k > 0; k--){if (window.array[i][k].color == deff){window.array[x][y].selected = true;}}}
        for (let i = x; i < window.array.length; i++){for (let k = y; k > 0; k--){if (window.array[i][k].color == deff){window.array[x][y].selected = true;}}}
        for (let i = x; i > 0; i--){for (let k = y; k < window.array[i].length; k++){if (window.array[i][k].color == deff){window.array[x][y].selected = true;}}}
    }
    load(window.array);
    return array[x][y].selected;
>>>>>>> 1f5d0576d7dc20be72d49c9e6994d0341eabf749
}

function Move(r, c){
    /*const start = {
        col: document.getElementsByTagName("td")[c],
        row: document.getElementsByTagName("td")[r],
    };
    //console.log(row);
    //console.log(col);
    console.log("Row: " + start.row.className);
    console.log("Col: " + start.col.className);*/
    //console.table(r, c);


    
}