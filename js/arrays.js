// JavaScript: The Definitive Guide

//7.1 Creating arrays

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

//7.2 Reading and Writing Array elements
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