

var DATA_SIZE = 300000;
//var DATA_SIZE = 10000;
var createData = function() {
	var list = new Array(DATA_SIZE);
	var now = new Date().getTime();

	for (var i = 0; i < DATA_SIZE; i++) 
	{
		list[i] = {
			id: i,
			timestamp: Math.round(Math.random() * now)
		};
	}
	 
	return list;
};

//window.onload = function(){
var buildTable = function(){
	var newDataList = [];
	//get the data list containing the data we are displaying
	newDataList = createData();

	var table = document.getElementById("newtable");

	//clear out any old tables
	table.innerHTML = "";
	
	//add a header to the table with the column names
	var header = table.createTHead();
	var row = header.insertRow(-1);
	//loop through the property names and populate column names
	for(var h=0; h<Object.keys(newDataList[0]).length; h++)
	{
		var cell = row.insertCell(-1);
		cell.innerHTML = Object.keys(newDataList[0])[h];

	}

	//add the data rows
	for (var i=0;i<newDataList.length;i++)
	{
		row = table.insertRow(-1);
		cell = row.insertCell(-1);

		//populate the cells with the values
		cell.innerHTML = newDataList[i].id;
		cell=row.insertCell(-1);
		cell.innerHTML = newDataList[i].timestamp;
	}


};

var buildTableWithDOM = function(){
	var newDataList = [];
	//get the data list containing the data we are displaying
	newDataList = createData();

	var tablediv = document.getElementById("tablediv");

	var table = document.createElement("table");
	table.style.border = "1px solid black";



	var idText = "";
	var timeText = "";

	for (var i=0; i<newDataList.length; i++){
		var tr = document.createElement("tr");

		var idText = document.createTextNode(newDataList[i].id);
		var timeText = document.createTextNode(newDataList[i].timestamp);
		var td1 = document.createElement("td");
		td1.style.border = "1px solid black";
		var td2 = document.createElement("td");
		td2.style.border = "1px solid black";
		td1.appendChild(idText);
		td2.appendChild(timeText);
		tr.appendChild(td1);
		tr.appendChild(td2);

		table.appendChild(tr);
	}

	tablediv.appendChild(table);

};

