/*    
 @licstart The following is the entire license notice for the 
        JavaScript code in this page.

        Copyright (C) 2021  Mark Robillard Jr

        The JavaScript code in this page is free software: you can
        redistribute it and/or modify it under the terms of the GNU
        General Public License (GNU GPL) as published by the Free Software
        Foundation, either version 3 of the License, or (at your option)
        any later version.  The code is distributed WITHOUT ANY WARRANTY;
        without even the implied warranty of MERCHANTABILITY or FITNESS
        FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
        *
  @licend*/
        
        
"use strict";


var gameTitle = "NFL 2K3 Fantasy Season Results <br> Week 13 of 17";

var division = ["NFC North", "NFC South", "NFC East", "NFC West",
    "AFC North", "AFC South", "AFC East", "AFC West"
];

var team = [
    ["Green Bay Packers", "Minnesota Vikings", "Chicago Bears", "Detroit Lions"],
    ["Tampa Bay Buccanneers", "Carolina Panthers", "New Orleans Saints", "Atlanta Falcons"],
    ["Dallas Cowboys", "Washington Redskins", "New York Giants", "Philadelphia Eagles"],
    ["Seattle Seahawks", "St. Louis Rams", "San Francisco 49ers", "Arizona Cardinals"],
    ["Cleveland Browns", "Pittsburgh Steelers", "Baltimore Ravens", "Cincinnati Bengals"],
    ["Houston Texans", "Indianapolis Colts", "Tennessee Titans", "Jacksonville Jaguars"],
    ["Miami Dolphins", "New York Jets", "New England Patriots", "Buffalo Bills"],
    ["Kansas City Chiefs", "Denver Broncos", "Oakland Raiders", "San Diego Chargers"]
];

var conference = [
    ["NFC", "NFC", "NFC", "NFC"],
    ["NFC", "NFC", "NFC", "NFC"],
    ["NFC", "NFC", "NFC", "NFC"],
    ["NFC", "NFC", "NFC", "NFC"],
    ["AFC", "AFC", "AFC", "AFC"],
    ["AFC", "AFC", "AFC", "AFC"],
    ["AFC", "AFC", "AFC", "AFC"],
    ["AFC", "AFC", "AFC", "AFC"]
];

var wins = [
//NFC start
    [7, 6, 5, 4],
    [12, 7, 3, 2],
    [7, 6, 6, 5],
    [8, 7, 6, 5],
//NFC end
//AFC start
    [7, 7, 7, 4],
    [8, 6, 5, 4],
    [9, 6, 4, 4],
    [7, 6, 6, 3],
//AFC end
];

var losses = [
//NFC start
    [5, 5, 6, 8],
    [0, 5, 8, 10],
    [5, 6, 6, 7],
    [4, 4, 6, 6],
//NFC end
//AFC start
    [5, 5, 5, 8],
    [4, 6, 7, 8],
    [3, 5, 8, 8],
    [5, 6, 6, 9],
//AFC end
];

var AFCProQB =["Brett Favre","Kansas City Chiefs"];
var NFCProQB =["Peyton Manning","Philadelphia Eagles"];

