const prompt = require("prompt-sync")();

var left = prompt("Enter left number: ")
var right = prompt("Enter right number: "); 

var big = left * right;
console.log("Your number is ", big)

var factors = []

function get_factor(num, mid)
{
	for (let i = 1; i <= num; i++)
	{
		if (num%i == 0)
		{
			factors.push(i)
		}
	}

	var l = []
	var r = []

	for (let k = 0; k < factors.length; k++)
	{
		l.push(factors[k])
	}

	for (let j = factors.length-1; j>=0; j--)
	{
		r.push(factors[j])
	}
	console.log("Factor pairs are: ")
	console.log("first #: ")
	console.log(l)
	console.log("second #: ")
	console.log(r)
	
}


get_factor(big)
