const t = document.getElementById("puzzle")
let table;
let objs;
let len;
var player = "red";

class Cell{
    constructor(row, col, index, color, canSelect){
        this.row = row;
        this.index = index;
        this.col = col;
        this.color = color;
        this.canSelect = canSelect;
    }
    static ReturnColor(x){
        return x.color;
    }
    static ReturnIndex(x){
        return x.index;
    }
    /*static ReturnRow(x){
        return x.row;
    }
    static ReturnCol(x){
        return x.col;
    }*/
}

function CheckInput() {
    let x = document.getElementById("in").value;
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
    for (let i = 0; i < col; i++) {
        table[i] = new Array(row);
    }
    t.innerHTML = ""
    for (let i = 0; i < row; i++) {
        let msg = ``;
        msg += `<tr>`
        for (let j = 0; j < col; j++){
            if ((i == row / 2-1&& j == col / 2-1) || (i == row/2 && j == col/2)) {
                //msg += `<td><span id=${i*col + j} class="red" onmouseover="Check(${i}, ${j}, ${i*col + j})" style="height: 30px; width: 30px; background-color: red;border-radius: 50%; display: inline-block;"></span></td>`;
                table[i][j] = new Cell(i, j, (i*col+j),"red");
            } else if((i==row/2-1&&j==col/2) || (i == row/2 && j == col/2-1)) {
                table[i][j] = new Cell(i, j, (i*col+j),"blue");
            }else{
                //msg += `<td><span id=${i*col + j} class="blank" onmouseover="Check(${i}, ${j}, ${i*col + j})" style="height: 30px; width: 30px; background-color: grey;border-radius: 50%; display: inline-block;">${i*col+j}</span></td>`;
                table[i][j] = new Cell(i, j, (i*col+j),"grey");
            }
            msg += `<td><span id=${table[i][j].index} class="blue" onmouseover="Check(${i}, ${j}, ${i*col + j})" style="height: 30px; width: 30px; background-color: ${table[i][j].color};border-radius: 50%; display: inline-block;"></span></td>`;
            
            
        }
        msg += `</tr>`;
        t.innerHTML += msg;
    }
    canPlace = true;

}
function Refresh(row, col){
    t.innerHTML = "";
    for (let i = 0; i < row; i++) {
        let msg = ``;
        msg += `<tr>`
        for (let j = 0; j < col; j++){
            msg += `<td><span id=${table[i][j].index}   class="blue" onmouseover="Check(${i}, ${j}, ${i*col + j})" style="height: 30px; width: 30px; background-color: ${table[i][j].color};border-radius: 50%; display: inline-block;"></span></td>`;
        }
        msg += `</tr>`;
        t.innerHTML += msg;
    }
}

function Check(r, c, index){
    let current = table[r][c];
    let placeAble = [];
    let target = {
        left: document.getElementById(index - 1),
        right: document.getElementById(index + 1),
        bottom: document.getElementById(index + len),
        top: document.getElementById(index - len),
        topleft: document.getElementById()
    };
    //console.table(table);
    console.log(Cell.ReturnColor(current));
    Refresh(len, len);
    if (player === "red") {
        if (target.bottom.style.backgroundColor == "blue" || target.top) {
            
        }
    } else {
        
    }
    let temp = table[0][2];
    temp.color = "red";
    //console.log(nextArr);
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