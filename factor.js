
var left = 12;
var right = 8; 
var mid = 29; 

var big = left * right;

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
	return factors;
}

function get_num(numbers, goal, mid)
{
	for (let i = 0; i < numbers.length; i++)
	{
		for (let j =numbers.length-1; j>=0; j--)
		{
			console.log(numbers[i,j])
			if (numbers[i] + numbers[j] == mid)
			{
				console.log(numbers[i], "and", numbers[j])
			}
		}
	}
}

get_factor(big)
get_num(get_factor(),big, mid)
