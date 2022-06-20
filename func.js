function text() {
    console.log("Привет!")
}

text()

function call(fanc) {
    fanc();
}

var printSomething = function() {
    console.log("Ещё раз привет")
}

printSomething();


call(printSomething)