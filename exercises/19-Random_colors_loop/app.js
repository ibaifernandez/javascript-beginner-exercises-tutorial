function getColor(colorNumber) {
	switch (colorNumber) {
	  case 1: return "red";
		  case 2: return "yellow";
		  case 3: return "blue";
		  case 4: return "green";
		  default: return "black";
	}
  }

function getAllStudentColors() {
	let students = parseInt(prompt("How many students do you wish to choose a color for?"));
	
	for (let i = 0; i < students; i++) {
	  let chosenColor = getColor(Math.floor(Math.random() * 5));
	  console.log(chosenColor);
	}
  }

  console.log(getAllStudentColors());