// JavaScript: The Definitive Guide
// ------------------------------------------------------------------------------------------
// 7.1 Creating arrays
// ------------------------------------------------------------------------------------------

//Create a arrays
var empty = [];				// An array with no elements
var primes = [2,3,5,7,11];	// An array with 5 numeric elements
var misc = [1.1,true,"a"];	// 3 elements of various types +trailing comma

//Values in an array literal do not need to be constants, they may be arbitrary expresions:
var base = 1024;
var table = [base, base+1, base+2, base+3];

//Array literals can contain object literals or other array literals:
var b = [[1,{x:1, y:2}], [2, {x:3, y:4}]];

//Omitted elements are given the value of undefined.
var count = [1,,3]; // An array with 3 elements, the middle one undefined.
var undefs = [,,];  // An array with 2 elements, both undefined.

//Createing arrays with a structure.
//Method 1: call with no arguments
var a = new Array(); //Creates an empty array with no elements and is equivilant to the array literal []

//Method 2: call it with a single numeric argument with specifies a length
var a = new Array(10); //creates an array with a specified length 

//Method 3: explicitly specify two or more array elements or a single non-numeric elements
var a = new Array(5,4,3,2,1, "testing, testing");

// ------------------------------------------------------------------------------------------
// 7.2 Reading and Writing Array elements
// ------------------------------------------------------------------------------------------

// You access en element of an array using the [] operator. A reference to the array should appear
// to the left of the brackets. An arbitrary expression that has a non-negative integer value should
// be inside the brackets. You can use this syntax to both read and write the value of an element of
// an array. Thus, the following are all legal JavaScript statements:

var a = ["world"];	// Start with a one=element array
var value = a[0];	// Read element 0
a[1] = 3.14;		// Write element 1
i = 2;
a[i] = 3;			// Write element 2
a[i + 1] = "hello"; // Write element 3
a[a[i]] = a[0];		// Read elements 0 and 2, write element 3

// ------------------------------------------------------------------------------------------
// 7.3 Sparse arrays
// ------------------------------------------------------------------------------------------
// A sparse array is one in whice the elements do not have contiguous indexes starting at 0.
// Normally, the length property of an array specifies the number of elements in the array. If the
// array is sparse, the value of the length property is greater than the number of elements. Sparse
// can be created with the Array() constructor or simply by assigning to an array index larger than
// the current array length.

a = new Array(5); // No elements but a.length is 5
a = [];			  // Create an array with no elements and a length = 0
a[1000] = 0 	  // Assignment adds one element but sets length to 1001

// when you ommit a value in an array literal, you are not creating a sparse array. the omitted element
// exists in the array and has a value of undefined. this is subtly different than array elements that do
// not exist at all. You can detect the difference between these two cases with the in operator

var a1 = [,,,]; 	    // This array is [undefined,undefined,undefined]
var a2 = new Array(3);  // This array has no values at all
0 in a1					// => true: a1 has an element with index 0
0 in a2 				// => false: a2 has no element with index 0

// ------------------------------------------------------------------------------------------
// 7.4 Array length
// ------------------------------------------------------------------------------------------

/*  Every array has a length property. it is this property that makes arrays different from
	regular JavaScript objects. For arrays that are dense (i.e., not sparse), the length 
	property specifies the number of elements in the array. It's value is one more than the 
	highest index in the array:
*/
[].length 				// => 0: the array has no elements
['a','b','c'].length	// => 3: highest indesx is 2, length is 3

// When an array is sparse, the length property is greater than the number of elements and all
// we can say about it is that length is guaranteed to be larger than the index of every element
// in the array.

// The second special behavior that array inplement in orderto maintain the length invariant
// is that if you set the length property to a non-negative integer n smaller than its current
// value, any array elements whose index is greater than or equal to n are deleted from the array:

a = [1,2,3,4,5]; 		// Start with a 5-element array.
a.length = 3 ;			// a is now [1,2,3]
a.length = 0;			// Delete all elements. a is []
a.length = 5;			// legth is 5, but no elements, like new Array(5)

// In ECMAScript 5, you can make the length property of an array read-only with Object.defineProperty()

a = [1,2,3];						//Start with a 3 element array.
Object.defineProperty(a, "length", 
				{writable: false});	//Make the length property read-only
a.length = 0;						// a is unchanged

// ------------------------------------------------------------------------------------------
// 7.6 Iterating Arrays
// ------------------------------------------------------------------------------------------

// The most common way to loop through the elements of an array is with a for loop

var keys = Object.keys(o);		//Get an array of property names for object o
var values = []					// Store matching property values in this array
for(var i=0; i< keys.length; i++) {		// For each index in the array
	var key = keys[i];					// Get the key at that index
	values[i] = o[key];					// Store the value in the values array
}

// In nested loops, or other contexts where performance is critical, you may sometimes
// see this basic array iteration loop optimized so that the array length is only looked up once
// rather than on each iteration:
for(var i = 0, len = keys.length; i < len; i++){
	var key = keys[i];
	values[i] = o[key];	
}

// These examples assume that the array is dense and that all elements contain valid data.
// If that is not the case, you should test the array elements before using them. If you want
// to exclude null, undefined, and nonexistent elements, you can write this:
for(var i = 0; i < a.length; i++) {
	if (!a[i]) continure; // Skip null, undefined, and nonexistent elements
	//loop body here
}

// If you only want to skip undefined and nonexistent elements, you might write:
for(var i = 0; i < a.length; i++) {
	if (a[i]) === undefined) continue; // Skip undefined + nonexistent elements
	//loop body here
}

// Finally, if you only want to skip indexes for which no array element exists but still want to
// handle existing undefined elements, do this:
for(var i = 0; i < a.length; i++) {
	if (!(i in a)) continue; // Skip nonexistent elements
	// loop body here
}

// You can also use a for/in loop with sparse arrays. This loop assigns enumerable property
// names (including array indexes) to the loop variable one at a time. Indexes that do not
// exist will not be iterated:
for(var index in sparseArray) {
	var value = sparseArray[index];
	// Now do something with index and value
}

// A for/in loop can return the names of inherited properties, such as the names of methods
// that have been added to Array.prototype. For this reason you should not use a for/in loop on
// on an array unless you include an additional test to filter out unwanted properties. You might
// use either of these tests:
for(var i in a) {
	if (!a.hasOwnProperty(i)) continue; //Skip inherited properties
	// loop body here
}

for(var i in a) {
	// Skip i if it is not a non-negative integer
	if (String(Math.floor(Math.abs(Number(i)))) !=== i) continue;
}

// ECMAScript5 defines a number of new methods for interating array elements by passing each one,
// in index order, to a function that you define. The forEach() method is the most general of these
// methods:

var data = [1,2,3,4,5];				// This is the array we want to iterate
var sumOfSquares = 0;				// We want to compute the sum of the squares of data
data.forEach(function(x){			// Pass each element of data to this function
	sumOfSquares += x*x;			// add up the squares
});
sumOfSquares						// => : 1+4+9+16+25

// ------------------------------------------------------------------------------------------
// 7.7 Multidementional Arrays
// ------------------------------------------------------------------------------------------

/*
	JavaScript does not support true multidimensional arrays, but you can approximate them 
	with arrays of arrays. To access a value in an array of arrays, simply use the [] operator
	twice. For example, suppose the varible matrix is an array of arrays of numbers. Every element
	in  martix[x] is an array of numbers. To access a particular number with in this array, you would
	write matrix[x][y]. Here is a concrete example that uses a two-dimensional array as a multiplication
	table
*/

//Create a multidimensional array
var table = new Array(10); 		// 10 rows of the table
for(var i = 0; i < table.length; i++)
	table[i] = new Array(10);	// Each row has 10 columns

//Initialize the array
for(var row = 0; row < table.length; row++) {
	for(col = 0; col < table[row].length; col++){
		table[row][col] = row*col;
	}
}

//Use the multidimensional array to compute 5*7
var product = table[5][7]; // => 35