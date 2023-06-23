const generateRows = (array) => {
  const rows = [];
  let printInstead = false;
  let lastMinHeightAvailable = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      if (printInstead) {
        let pushString = [];
        for (let k = 0; k < lastMinHeightAvailable; k++) {
          pushString.push("*");
        }
        rows.push(pushString);
      } else {
        rows.push("\n");
      }
    } else {
      lastMinHeightAvailable = Math.min(
        array[i],
        findFirstNonZeroValue(array, i + 1)
      );
      printInstead = true;
      let pushString = [];
      for (let j = 0; j < array[i]; j++) {
        pushString.push("#");
      }
      rows.push(pushString);
    }
  }
  return rows;
};

function findFirstNonZeroValue(array, startIndex) {
  for (var i = startIndex; i < array.length; i++) {
    if (array[i] !== 0) {
      return array[i];
    }
  }
  return null;
}

const findBiggestArray = (arrays) =>
  arrays.reduce(
    (biggestArray, currentArray) =>
      currentArray.length > biggestArray.length ? currentArray : biggestArray,
    []
  );

function renderTable(array) {
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");

  // Get the highest number in the array
  var highestNumber = Math.max(...array);

  // Calculate the number of rows in the table
  var numRows = highestNumber;

  // Create table rows
  for (var i = numRows; i >= 0; i--) {
    var row = document.createElement("tr");

    // Create table cells
    if (i < rows.length) {
      console.log(rows[i], i);
      for (var j = 0; j < array.length; j++) {
        var cell = document.createElement("td");
        var cellContent = rows[i][j];
        if (rows[i][j] == "#") {
          cell.classList.add("block");
        } else if (rows[i][j] == "*") {
          cell.classList.add("water");
        }
        cell.textContent = cellContent;
        row.appendChild(cell);
      }
    } else {
      for (var j = 0; j < array.length; j++) {
        var cell = document.createElement("td");
        var cellContent = "";

        cell.textContent = cellContent;
        row.appendChild(cell);
      }
    }

    tbody.appendChild(row);
  }

  table.appendChild(tbody);

  // Apply CSS styles for table formatting
  table.style.margin = "0 auto";
  table.style.borderCollapse = "collapse";
  table.style.border = "1px solid black";
  table.style.padding = "10px";

  // Apply CSS styles for cell formatting
  var cells = table.getElementsByTagName("td");
  for (var k = 0; k < cells.length; k++) {
    cells[k].style.border = "1px solid black";
    cells[k].style.padding = "10px";
  }

  // Append the table to the body of the HTML page
  document.body.appendChild(table);
}

var array = [0, 4, 0, 0, 6, 1, 0, 1];
var rows = generateRows(array);
// Find the biggest array inside an array (rows)
var temp = findBiggestArray(rows).length;
var tempRows = [...rows];
rows = [];
for (var i = 0; i < temp; i++) {
  var row = [];

  for (var j = 0; j < tempRows.length; j++) {
    if (tempRows[j].length > i) {
      row.push(tempRows[j][i]);
    } else {
      row.push("");
    }
  }
  rows.push(row);
}

// rows = rows.reverse();

console.log(rows);
renderTable(array);
