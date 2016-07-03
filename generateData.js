

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

window.onload = function(){

	var newDataList = [];
	//get the data list containing the data we are displaying
	newDataList = createData();

	var table = document.getElementById("newtable");

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

