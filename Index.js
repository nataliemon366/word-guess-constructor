// logic 
var Word = require("./word.js");
var inquire = require("inquirer");

var letterArray = "abcdefghijklmnopqrstuvwxyz";

var UnitedStates = [
    "Alabama",
"Alaska",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
"Delaware",
"Florida",
"Georgia",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming",
];

var randomIndex= Math.floor(Math.random() * UnitedStates.length);
var randomWord = UnitedStates[randomIndex];

var computerWord = new Word(randomWord);

var requireNewWord= false;
var incorrectLetters = [];
var correctLetters = [];

var guessesLeft = 10;

//selects in random from the u.s names array
function theLogic(){
    if(requireNewWord){
        var randomIndex = Math.floor(Math.random()* UnitedStates.length);
        var randomWord = UnitedStates[randomIndex];

        computerWord = new Word(randomWord);

        requireNewWord = false;
    }
    var wordComplete =  [];
    if (wordComplete.includes(false)){
        inquire.prompt({
            {
                type:"input",
                message: "Select letter from A to Z",
                name: "userInput"
            }
        }).then(function(input){
            if(!letterArray.includes(input.userInput) || 
            input.userInput. length > 1
            ){
                console.log("\nPlease try again.\n");
                theLogic();
            }else{
                if(
                    incorrectLetters.includes(input.userInput) || 
                    correctLetters.includes(input.userInput) ||
                    input.userInput === ""
                ){
                    console.log("\nAlready Guessed or Nothing was entered\n");
                    theLogic();
                }
            }
        }); 
    }else {
        console.log("YOU WIN!!! \n")
    }
}

