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


var gameTitle = "NFL 2K3 Fantasy Season Results <br> Week 11 of 17";

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
    [7, 5, 3, 3],
    [10, 5, 3, 2],
    [7, 5, 4, 4],
    [5, 5, 5, 4],
    [6, 6, 5, 4],
    [6, 5, 4, 3],
    [7, 5, 3, 3],
    [6, 4, 4, 3],
];

var losses = [
    [3, 4, 5, 6],
    [0, 5, 6, 8],
    [3, 5, 6, 6],
    [3, 4, 4, 5],
    [4, 4, 5, 6],
    [3, 5, 6, 6],
    [3, 3, 6, 7],
    [4, 5, 5, 6],
];
