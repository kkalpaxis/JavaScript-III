/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: In window binding, the value of "this" is set in the global scope. To do so, we use window.variable and then define
the variable in the global scope. Hereafter, every time we invoke the function it will take the value we set in window.variable.

* 2. Implicit Binding: Implicit binding is the most common situation where "this" is invoked. When you invoke the function,
implicit binding says to look to the left of the dot to figure out what "this" is referring to. 

* 3. New Binding: When you invoke a function with "new", the this keyword inside of the function is now subject to the value of the
arguments you set. This will correspond to whatever you pass through the function when you invoke it.

* 4. Explicit Binding: Explicit binding is where we make use of the .call and the .apply functions. For call, the first argument provides
the context. Every argument thereafter gets passed to the function. In apply, however, instead of listing out individual arguments as we
are required to in call, we can simply put an entire array as an argument.
*
* write out a code example of each explanation above
*/

// Principle 1: Window Binding
var squareNum = function() {
    console.log(this.num * this.num);
};
window.num = 14;
squareNum();


// Principle 2: Implicit Binding
var sayCapitalMixin = function (obj) {
    obj.sayCapital = function() {
        console.log("The capital of" + " " + this.name + " " + "is" + " " + this.capital + ".");
    }
}
var NewYork = {
    name: 'New York',
    populationInMillions: 19.54,
    capital: 'Albany',
}
var NewJersey = {
    name: 'New Jersey',
    populationInMillions: 8.909,
    capital: 'Trenton',
}
sayCapitalMixin(NewYork);
sayCapitalMixin(NewJersey);
NewYork.sayCapital();
NewJersey.sayCapital();


// Principle 3: New Binding
var House = function (type, cost, neighborhood) {
    this.type = type;
    this.cost = cost;
    this.neighborhood = neighborhood;
    this.describe = function() {
        console.log('My dream house is a ' + this.cost + ' ' + this.type + ' in the ' + this.neighborhood + '.');
    };
};
var dreamHouse = new House('townhouse', '50 million dollar', 'West Village');
dreamHouse.describe();


// Principle 4: Explicit Binding
var giveIntroduction = function (like1, like2, like3){
        console.log('My name is ' + this.name + '. I am from ' + this.hometown + ' and I am ' + this.age + 
        ' years old. I like ' + like1 + ', ' + like2 + ', ' + like3 + '.');
    }
var Bryn = {
    name: 'The Milk Man',
    hometown: 'Toronto',
    age: 19,
}
var likes = ['Whole Milk', '2% Milk', 'Chocolate Milk'];
giveIntroduction.call(Bryn, likes[0], likes[1], likes[2]);