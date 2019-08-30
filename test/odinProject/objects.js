//object definition
const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function() {
        //stuff
    }
};

//dot notation to get info out of an object
myObject.property;

//bracket notation does the same thing. Dot notation wont work here, because of the quoatations
myObject["obnoxious property"];

//Objects are not necessary for a computer, but they do make code easier to work with for humans
//Example with two players in tic-tac-toe
const playerOneName = "Jamie";
const playerTwoName = "Andrew";
const playerOneMarker = "X";
const playerTwoMarker = "O";

//Versus object
const playerOne = {
    name: "Jamie",
    marker: "X"
};

const playerTwo = {
    name: "Andrew",
    marker: "O"
};

//You can access the properties easily with the objects
playerOne.name;
playerTwo.marker;

//This is better, but if we have a large amount of items like in ecommerce we need a mold of an object
//This is a constructor
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

//You call this function like this
const player = new Player("Jamie", "X");

//Every function has a protoype property(which is empty by default) that are inheritted by the sibling functions
//Here, we add the option to print the name of the player
Player.prototype.print = function() {
    console.log(this.name);
};

player.print;

//Why do this instead of declaring the function in the constructor? If we declare a function in the constructor,
//then that functoin would be duplicated every time an a new object of that type were created. If we add the,
//function to the prototype, then it only gets created once and all sibling functions will refer to that single
//instance of the function. It says space and time basically.

//Recommended Method for Prototypal Inheritance
function Student() {}

Student.prototype.sayName = function() {
    console.log(this.name);
};

function EightGrader(name) {
    this.name = name;
    this.grade = 8;
}

EightGrader.prototype = Object.create(Student.prototype);

const carl = new EightGrader("carl");
carl.sayName(); //console logs "carl"
carl.grade; //8

//The best thing to use is the factory function. Its way easier and avoid all the problems protoyping has
const personFactory = (name, age) => {
    const sayHello = () => console.log("hello!");
    return { name, age, sayHello };
};

const jeff = personFactory("jeff", 27);
console.log(jeff.name);
jeff.sayHello();
