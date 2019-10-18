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

