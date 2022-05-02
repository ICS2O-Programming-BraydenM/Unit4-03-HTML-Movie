// Copyright (c) 2022 Brayden MacMillan All rights reserved
//
// Created by: Brayden MacMillan
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

// This function displays a statement to see what movie rating a specific age should be permitted to see
 
function onButtonClick () {
  
	// get user input (degrees in celsius)
	let age = parseInt(document.getElementById('age').value)

  // if statements, if degrees celsius is over 15, tell them it is hot outside, but cold outside if below 15 degrees celsius 
	if (age >= 18) {
		let greeting = "You are permitted to watch an R rated movie alone!"
    document.getElementById('display-results').innerHTML = greeting
	}

  else if (age >= 13) {
    let greeting = "You are permitted to watch a PG-13 rated movie alone."
    document.getElementById('display-results').innerHTML = greeting 
  }

  else if (age >= 10) {
    let greeting = "You are permitted to watch a G rated movie alone."
    document.getElementById('display-results').innerHTML = greeting 
  }

  else if (age >= 5) {
    let greeting = "You should not be going to see a movie alone. Parental guidance is extremely encouraged."
    document.getElementById('display-results').innerHTML = greeting 
  }
}