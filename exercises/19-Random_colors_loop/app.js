/*

function getColor(colorNumber) {
	switch (colorNumber) {
	  case 1: return "red";
		  case 2: return "yellow";
		  case 3: return "blue";
		  case 4: return "green";
		  default: return "black";
	}
  }
  
  function getAllStudentColors(students) {
	var students = prompt("How many students you need to assign a color to?");
	students = parseInt(students);
	var colorPerStudent = {};
	
	for (let i = 0; i < students; i++) {
	  chosenColor = getColor(Math.floor(Math.random() * 5));
	  colorPerStudent[`Student #${[i+1]}`] = chosenColor;
	}
	return colorPerStudent;
  }
  
  console.log(getAllStudentColors());

*/

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
	  chosenColor = getColor(Math.floor(Math.random() * 5));
	  console.log(chosenColor)
	}
	return "This is a function without a proper return.";
  }
  
/*

function getColor(colorNumber) {
	switch (colorNumber) {
	  case 1: return "red";
		  case 2: return "yellow";
		  case 3: return "blue";
		  case 4: return "green";
		  default: return "black";
	}
  }

function getAllStudentColors("10") {
  students = parseInt(students);
    if (students > 0) {
    chosenColor = getColor(Math.floor(Math.random() * 5));
    students--;
    getAllStudentColors(students);
  }
  return "The chosen colors for each student have just been printed."
}
  

//call the function below with the number of students in the class and print on the console
getAllStudentColors(10);

*/