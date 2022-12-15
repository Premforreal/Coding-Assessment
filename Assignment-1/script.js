let table = document.getElementById("table");
let addTop = document.getElementsByClassName('top');
let addBottom = document.getElementsByClassName('bottom');

let rowLength = table.rows.length;
let tableData=[];
let data = [[],[],[],[],[]];

window.addEventListener("load",getTableData);

function getTableData(){
    
    for (let i = 1; i < rowLength; i++)
    {
        let cells = table.rows.item(i).cells;

        for(let j = 0; j < cells.length; j++)
        {
            let cellValue = cells.item(j).innerHTML;
            tableData.push(cellValue); 
        }
    }

    for(let i=0;i<5;i++)
    {    
        for(let j=i;j<tableData.length;j=j+5)
        { 
            data[i].push(tableData[j]);
        
        }
    }
}


addTop[0].addEventListener('click',()=>{
    clearTable();
    addData(true);
});

addBottom[0].addEventListener('click',()=>{
    clearTable();
    addData(false);
});


function clearTable() {
    for(let i = 1;table.rows.length>1;i++)
    {
        table.deleteRow(1);
    }
}


function addData(top){

    for (let i = 0; i < data.length; i++)
    {
        let rndm = Math.round(Math.random()*4);
        // unshift/push - add an element to the beginning/end of an array
        // shift/pop - remove and return the first/last element of an array
        top ? data[i].unshift(data[i][rndm]) : data[i].push(data[i][rndm]);
    }

    //to recorrect indexes
    for(let i = 0; i<data[0].length; i++)
    {
        data[0][i] = i+1
    }
    generateTable();
}


function generateTable(){

    const tableBody = document.createElement("tbody");

    for (let i =0; i<data[0].length;i++)
    {
        const row = document.createElement("tr");
        
        for (let j =0; j<data.length;j++)
        {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(data[j][i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }   
        
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);
}