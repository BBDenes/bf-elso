const t = document.getElementById("puzzle")
let table;
let len;
let canPlace = false;
var redPlaceable = [];
var bluePlaceable = [];


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
    table = new Array(row);
    let startingPosRed = [row/2-1, col/2-1];
    let startingPosBlue = [row/2-1, col/2];
    //console.log(startingPosRed);
    //console.log(startingPosBlue);
    for (let i = 0; i < col; i++) {
        table[i] = new Array(row);
    }
    t.innerHTML = ""
    for (let i = 0; i < row; i++) {
        let msg = ``;
        msg += `<tr>`
        for (let j = 0; j < col; j++){
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
    }
    canPlace = true;

}

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
