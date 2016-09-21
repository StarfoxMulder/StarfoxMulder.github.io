var a = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);
var op = process.argv[2];

if (op == 'add' || op == 'Add') {
	sum = a+b;
	console.log("addition: ", sum);
} else if (op == 'subtract' || op == 'Subtract' || op == 'sub' || op == 'Sub') {
	sum = a-b;
	console.log("subtraction: ", sum);
} else if (op == 'multiply' || op == 'Multiply' || op == 'multi' || op == 'Multi') {
	sum = a*b;
	console.log("multiplication: ", sum);
} else if (op == 'divide' || op == 'Divide' || op == 'div' || op == 'Div') {
	sum = a/b;
	console.log("division: ", sum);
} else if (op == 'remainder' || op == 'Remainder' || op == 'remain' || op == 'Remain') {
	sum = a%b;
	console.log("remainder: ", sum);
} else {
	console.log("This is not basic math.");
}