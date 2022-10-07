class Color{
    constructor(array,x,y){
        this.array = array;
    }
    add_Color(color){
        return this.array[x][y].color = color;
    }
}
function random_Id(length){length ? length : 20;let id = "";for (let i = 0; i < length; i++){id += Math.floor(Math.random()*9)}return id;}
function load(array){
    document.getElementById("puzzle").innerHTML += "";
    let html = "";
    for (let i = 0; i < array.length; i++){
        html += "<tr>"
        for (let j = 0; j < array[i].length;j++){
            array[i][j].id = random_Id(15);
            html += `<td><span onclick = "put(${i}, ${j})" class="blank" id = "${array[i][j].id}" onmouseover="Check(${i}, ${j})" style="height: 30px; width: 30px;${array[i][j].selected ? "border: 2px solid blue;" : "padding : 2px;"} background-color: ${array[i][j].color ? array[i][j].color : "grey"};border-radius: 50%; display: inline-block;"></span></td>`
        }
        html += "</tr>";
    }
    document.getElementById("puzzle").innerHTML = html;
}