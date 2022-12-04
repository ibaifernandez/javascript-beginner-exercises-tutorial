var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0; 
  for (let i = 0; i < anArray.length; i++) {
    for (let j = 0; j < anArray[i].lucky_numbers.length; j++) {
        sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + anArray[i].lucky_numbers[j]
  }
  }
  
  return sumOfAllLuckyNumbers;
}

person.lucky_numbers[3] = 33;

var person3 = {};
person3.name = 'Jimmy Doe';
person3.age = 13;
person3.gender = 'male';
person3.lucky_numbers = [1,2,3,4];
person3.significant_other = null;

family.members.push(person3);

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 