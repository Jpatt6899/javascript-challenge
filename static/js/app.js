// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function addTable(dataItem){
tbody.html("")
dataItem.forEach((itemDate) => {
    var row = tbody.append("tr");
    Object.entries(itemDate).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
addTable(tableData);


var button = d3.select("#filter-btn")
var form = d3.select("#form")


button.on("click", runEnter);


form.on("submit", runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputValue = d3.select("#datetime").property("value");
   

    var filteredData = tableData.filter(dates => dates.datetime === inputValue);
    

   
    addTable(filteredData);
    // tbody.html("")


    // filteredData.forEach((item) => {
    //     var row = tbody.append("tr");
    //     Object.entries(item).forEach(([key, value]) => {
    //       var cell = row.append("td");
    //       cell.text(value);
    //     });
    // });
};
