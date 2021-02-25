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


var gameTitle = "NFL 2K3 Fantasy Season Results <br> Week 15 of 17";

var division = ["NFC North", "NFC South", "NFC East", "NFC West",
    "AFC North", "AFC South", "AFC East", "AFC West"
];

var team = [
    ["Green Bay Packers", "Minnesota Vikings", "Chicago Bears", "Detroit Lions"],
    ["Tampa Bay Buccanneers", "Carolina Panthers", "New Orleans Saints", "Atlanta Falcons"],
    ["Dallas Cowboys", "New York Giants", "Philadelphia Eagles", "Washington Redskins"],
    ["Seattle Seahawks", "St. Louis Rams", "San Francisco 49ers", "Arizona Cardinals"],
    ["Pittsburgh Steelers", "Baltimore Ravens", "Cleveland Browns", "Cincinnati Bengals"],
    ["Houston Texans", "Jacksonville Jaguars", "Indianapolis Colts", "Tennessee Titans"],
    ["Miami Dolphins", "New York Jets", "Buffalo Bills", "New England Patriots"],
    ["Kansas City Chiefs", "Oakland Raiders", "Denver Broncos", "San Diego Chargers"]
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
    [8, 7, 6, 5],
    [14, 8, 3, 2],
    [8, 8, 6, 6],
    [9, 8, 7, 6],
//NFC end
//AFC start
    [9, 8, 7, 4],
    [9, 7, 6, 6],
    [11, 7, 6, 4],
    [8, 8, 6, 3],
//AFC end
];

var losses = [
//NFC start
    [6, 6, 7, 9],
    [0, 6, 10, 12],
    [6, 6, 8, 8],
    [4, 6, 7, 7],
//NFC end
//AFC start
    [5, 6, 6, 10],
    [5, 7, 7, 8],
    [3, 6, 8, 10],
    [6, 6, 8, 11],
//AFC end
];

var AFCProQB =["Brett Favre","Kansas City Chiefs"];
var NFCProQB =["Peyton Manning","Philadelphia Eagles"];

