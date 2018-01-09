const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

const normalItStatement = `should return:
			'fizz-buzz' for multiples of 15, 
			'buzz' for multiples of 5 that aren't multiples of 15,
			'fizz' for multiples of 3 that aren't multiples of 5,
			the number given if it isn't divisible by 15, 5 or 3.`;

const edgeItStatement = `should return an error if given a 
non-numerical input.`

describe('fizzBuzzer', function() {
	it(normalItStatement, function() {
		const normalCases = [
			{ num: 3, expected: 'fizz' },
			{ num: 10, expected: 'buzz' },
			{ num: 30, expected: 'fizz-buzz' },
			{ num: 27, expected: 'fizz' },
			{ num: 29, expected: 29 },
		]
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		})
	});



	// expects error throws when non-numerical arguments 
	// are given to fizzBuzzer.
	it(edgeItStatement, function() {
		const badInputs = ['tttt','fizz',null, undefined, '&&', `(ツ)`];
		badInputs.forEach(function(input) {
			expect(function(){
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});

});

//`it should return 'buzz' for multiples of 5 that aren't multiples of 15`
//`it should return 'fizz' for multiples of 3 that aren't multiples of 5`
