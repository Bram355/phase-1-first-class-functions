
function receivesAFunction(callback) {
    callback();
}


function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction;
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!");
    };
}

receivesAFunction(() => console.log("Callback executed!")); 
const namedFunc = returnsANamedFunction();
namedFunc(); 

const anonFunc = returnsAnAnonymousFunction();
anonFunc(); 