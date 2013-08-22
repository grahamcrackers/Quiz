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

