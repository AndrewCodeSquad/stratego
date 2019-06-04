// Array to keep track of piece locations
var pLocations = ['bs1a.png', "bm9.png", "rs1a.png", "bs1b.png", "", "", "", "", "", "", "rs1b.png", "", "rc8a.png", "", "", "bs4a.png", "", "rm9.png", "", "", "", "", "rs1c.png", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "water.png", "water.png", "", "", "water.png", "water.png", "", "", "", "", "water.png", "water.png", "", "", "water.png", "water.png", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var selectedSpace = '';
var selectedPiece = '';
var spaces = document.getElementsByTagName('td');

// Individual "move" buttons (a workaround until nested loops are working)
var leftBtn = document.querySelector('#moveLeft');
leftBtn.onclick = moveLeft;

displayBoard();
pickPieceUp();
// putPieceDown();

function pickPieceUp() {
	// loop through all spaces
	for (var i = 0; i < spaces.length; i++) {
		// listen for first click
		spaces[i].addEventListener('click', function () {
			selectedSpace = this.getAttribute("id");  // get ID of space clicked
			this.classList.add('selected');  // mark that space as 'selected'
			selectedPiece = pLocations[Number(selectedSpace)];  // identify which piece was chosen
			console.log("The old location is " + selectedSpace);
			console.log("The selected piece is " + selectedPiece);
		});
	};
	return;
}

function putPieceDown() {
	for (let i = 0; i < spaces.length; i++) {
		// listen for second click
		spaces[i].addEventListener('click', function() {
			var destIndex = this.getAttribute("id");  // get ID of destination
			spaces[selectedSpace].classList.remove('selected');  // de-select old location
			console.log("The new location is " + destIndex);
			pLocations[Number(destIndex)] = selectedPiece;  // record piece name at destination
		});
	};
	return;
}


// function move(){
// 	var oldLocation = prompt("Enter current location of piece (0-99)");
// 	var selectedPiece = pLocations[oldLocation];
// 	console.log("Selected piece is " + selectedPiece);
// 	var direction = prompt("Which direction?");
// 	if(dir === "left"){
// 		var newLocation = Number(oldLocation) - 1;
// 		console.log('Old location was ' + oldLocation);
// 		console.log('New location is ' + newLocation);
// 	};
// 	if(pLocations[newLocation] === ""){  // if the space is empty
// 		pLocations[newLocation] = selectedPiece; // move selectedPiece into new space
// 		pLocations[oldLocation] = ""; // empty out old location
// 		displayBoard();
// 	} else if(pLocations[newLocation] !== ""){
// 		// var occupyingPiece = pLocations[newLocation];
// 		alert("That space is occupied");
// 		}
// }


// // could move functions be refactored to 1 function w/directional argument?
function moveLeft() {
	var oldLocation = prompt("Enter current location of piece (0-99)");
	var selectedPiece = pLocations[oldLocation];
	console.log("Selected piece is " + selectedPiece);
	var newLocation = Number(oldLocation) - 1;
	console.log('Old location was ' + oldLocation);
	console.log('New location is ' + newLocation);
	if (pLocations[newLocation] === "") {  // if the space is empty
		pLocations[newLocation] = selectedPiece; // move selectedPiece into new space
		pLocations[oldLocation] = ""; // empty out old location
		displayBoard();
	} else if (pLocations[newLocation] !== "") {
		// var occupyingPiece = pLocations[newLocation];
		alert("That space is occupied");
	}
}

function moveRight() {
	var oldLocation = prompt("Enter current location of piece (0-99)");
	var selectedPiece = pLocations[oldLocation];
	console.log("Selected piece is " + selectedPiece);
	var newLocation = Number(oldLocation) + 1;
	console.log('Old location was ' + oldLocation);
	console.log('New location is ' + newLocation);
	if (pLocations[newLocation] === "") {  // if the space is empty
		pLocations[newLocation] = selectedPiece; // move selectedPiece into new space
		pLocations[oldLocation] = ""; // empty out old location
		displayBoard();
	} else if (pLocations[newLocation] !== "") {
		// var occupyingPiece = pLocations[newLocation];
		alert("That space is occupied");
	}
}

function moveUp() {
	var oldLocation = prompt("Enter current location of piece (0-99)");
	var selectedPiece = pLocations[oldLocation];
	console.log("Selected piece is " + selectedPiece);
	var newLocation = Number(oldLocation) - 10;
	console.log('Old location was ' + oldLocation);
	console.log('New location is ' + newLocation);
	if (pLocations[newLocation] === "") {  // if the space is empty
		pLocations[newLocation] = selectedPiece; // move selectedPiece into new space
		pLocations[oldLocation] = ""; // empty out old location
		displayBoard();
	} else if (pLocations[newLocation] !== "") {
		// var occupyingPiece = pLocations[newLocation];
		alert("That space is occupied");
	}
}

function moveDown() {
	var oldLocation = prompt("Enter current location of piece (0-99)");
	var selectedPiece = pLocations[oldLocation];
	console.log("Selected piece is " + selectedPiece);
	var newLocation = Number(oldLocation) + 10;
	console.log('Old location was ' + oldLocation);
	console.log('New location is ' + newLocation);
	if (pLocations[newLocation] === "") {  // if the space is empty
		pLocations[newLocation] = selectedPiece; // move selectedPiece into new space
		pLocations[oldLocation] = ""; // empty out old location
		displayBoard();
	} else if (pLocations[newLocation] !== "") {
		// var occupyingPiece = pLocations[newLocation];
		alert("That space is occupied");
	}
}

function displayBoard() {  // Concatenate table elements & piece names into 1 string for entire board
	var board = document.querySelector("#board");
	var boardHtml = "";
	// make beginning of each row, 10 times
	for (let row = 0; row <= 9; row++) {
		boardHtml += "<tr>";
		// make each column, 10 times
		for (let col = 0; col <= 9; col++) {
			// convert "col" to a string and concatenate to "row"
			var index = row + col.toString();
			// add ids & convert "index" back to number for use as array index
			boardHtml += "<td id='" + index + "'><img src='" + pLocations[Number(index)] + "'></td>";
		};
		// add closing tag for each row
		boardHtml += "</tr>";
	}
	board.innerHTML = boardHtml;
}
