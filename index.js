// 1. What is the big O for this?
// 1) constant O(1). You perform one action by yelling out and someone either responds or doesn't thus telling you what you need to know
// 2) linear O(n). Since you are asking each person once you are scaling the problem linearly. If there was 100 people it would take you 10 times as long compared to only 10

// 2. Even or Odd
// Constant O(1). It has no room for scalability as there is only one input. 

// 3. Are you here?
// Polynomial O(n^2). For every element in array1 you are checking every element in array2 compounding the operations

// 4. Doubler
// Linear O(n). You are only looping through the array once to perform an operation but looping through every element in the array. 

// 5. Naive search
// Linear O(n). You only go through each item in the array once to check to see if it is the item you are looking for. 

// 6. Creating Pairs
// Algorithmic O(n log(n)). This is more of a guess based on how the function works. The first for loop will go through each element in the array but the second for loop will only go through elements with higher indeces than the index of whichever element the first loop is on. This means the second loop will take increasingly less time to complete the longer the app runs. It's not as fast as linear but its not as slow as polynomial and by the graph that is approx O(n log(n))

// 7. Compute the sequence
// What does it do? 
//It prints out the fibonacci sequence based on how high the number given was. ex: if num given is 7 prints the first 7 fibbonacci numbers by adding the two numbers previous together. 
// Complexity? 
//Linear O(n). It will perform as many operations as given by the num argument. 

// 8. An efficient search
// Logarithmic O(log(n)). This takes a sorted array and an item. It splits the array into two halves by picking the middle element. If that element is greater than the element we are seeking we can eliminate the upper half. If the current element is less than the element we are seeking we can eliminate the lower half. It does this and keeps splitting into smaller and smaller bits until the element we are looking for is found. Because we are eliminating large amounts of our data from our search, due to the knowledge the array is sorted, we know that the runtime is O(log(n))

// 9. Random element
// Constand O(1). It simply picks a random element and returns it no need to look at any of the items.

// 10. What Am I? 
//What does it do?
// It checks to see if the number given, n, is not a whole number. If it is not a whole number it returns true. If it is a whole number it returns false. 
//What is the complexity?
// Linear O(n). The number is the only scaling factor here. As it gets bigger there have to be more and more checks to see if there are any factors of said number. This continues until the number about to be checked, i, is greater than or equal to the number given, n. 

// 11. Tower of Hanoi

// made it more like an object in OOP so we could see a representation of the discs moving. these functions have side-effects intentionally. Otherwise I wouldnt be able to see which discs are on which pegs at any given moment as the tower function's idea of start intermediate and destination are subjective to which smaller tower it is moving atm. 
{
    let stateOfHanoi = {
        start: [],
        intermediate: [],
        destination: []
    };

    function hanoi(numOfDiscs) {
        for (let i = numOfDiscs; i > 0; i--) {
            stateOfHanoi.start.push(i);
        }
        towerPrint();
        tower(numOfDiscs, stateOfHanoi.start, stateOfHanoi.destination, stateOfHanoi.intermediate);
    }

    function tower(numOfDiscs, start, destination, intermediate) {

        if (numOfDiscs > 0) {
            tower(numOfDiscs - 1, start, intermediate, destination);

            destination.push(start.pop());
            towerPrint();

            tower(numOfDiscs - 1, intermediate, destination, start);
        }
    }


    function towerPrint() {
        let A = stateOfHanoi.start;
        let B = stateOfHanoi.intermediate;
        let C = stateOfHanoi.destination;

        console.log('A: ' + A);
        console.log('B: ' + B);
        console.log('C: ' + C);
        console.log(' ');
    }


    hanoi(4);
}


// 12. Iterative Version
// 1. Counting Sheep
// Recursive complexity Linear O(n) based on num given
// Iterative complexity Linear O(n) based on num given

function sheep(num) {
    for (let i = num; i > 0; i--) {
        console.log(`${i}: Another sheep jumps over the fence.`);
    }
    console.log('All sheep jumped over the fence.');
}

// 2. Power Calculator
// Recursive complexity Linear O(n) based on exponent given
// Iterative complexity Linear O(n) based on exponent given

function powerCalculator(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp < 0) {
        return 'Exponent should be >= 0';
    }
    let product = 1;
    for (let i = 0; i < exp; i++) {
        product *= base;
    }
    return product;
}

// 3. Reverse String
// Recursive complexity Linear O(n) based on how long the string is
// Iterative complexity Linear O(n) based on how long the string is

function reverse(str) {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str.charAt(i);
    }
    return newString;
}

// 4. nth Triangular Number
// Recursive complexity Linear O(n) based on n
// Iterative complexity Linear O(n) based on n

function triangular(n) {
    if (n < 0) return 'N must be >= 0 as it is impossible to have negative length.';
    let counter = 0;
    for (let i = 1; i <= n; i++) {
        counter += i;
    }
    return counter;
}

// 5. String Splitter
// Recursive complexity Linear O(n) based on how long the string is
// Iterative complexity Linear O(n) based on how long the string is

function splitter(str) {
    let currentItem = '';
    let itemArray = [];

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== '/') {
            currentItem += str.charAt(i);
        } else itemArray.push(currentItem);
    }
    return itemArray;
}

// 6. Fibonacci
// Recursive complexity Linear O(n) based on n
// Iterative complexity Linear O(n) based on n

function fibonacci(n) {
    let fibonacciStart = [0, 1];
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            console.log(fibonacciStart[i]);
        }
        else {
            let newFib = fibonacciStart[i - 2] + fibonacciStart[i - 1];
            console.log(newFib);
            fibonacciStart.push(newFib);
        }
    }
}

// 7. Factorial
// Recursive complexity Linear O(n) based on n
// Iterative complexity Linear O(n) based on n

function factorial(n) {
    let product = n;
    for (let i = n - 1; i > 0; i--) {
        product *= i;
    }
    return product;
}