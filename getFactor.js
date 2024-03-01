const prompt = require("prompt-sync")();

var left = prompt("Enter left number: ")
var right = prompt("Enter right number: "); 
var mid = 29; 

var big = left * right;
console.log("Your number is ", big)

var factors = []

function get_factor(num)
{
	for (let i = 1; i <= num; i++)
	{
		if (num%i == 0)
		{
			factors.push(i)
		}
	}

	console.log("The factors for ", num, "are: ")
	for (let i =0; i < factors.length; i++)
	{
		console.log(factors[i])
	}
}


get_factor(big)
