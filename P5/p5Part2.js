//Wise Quotes
var quoteLibrary = {
    init: function(begin, middle, end) {
        this.begin = begin;
        this.middle = middle;
        this.end = end;
    }
};

var wiseQuote1 = Object.create(quoteLibrary);
wiseQuote1.init("You only live once,", " but if you do it right, ", "once is enough.");
var wiseQuote2 = Object.create(quoteLibrary);
wiseQuote2.init("Insanity is doing the same thing,"," over and over again, ","but expecting different results.");
var wiseQuote3 = Object.create(quoteLibrary);
wiseQuote3.init("Love all,"," trust a few, ","do wrong to none.");
var wiseQuote4 = Object.create(quoteLibrary);
wiseQuote4.init("Do what you can,"," with what you have, ","where you are.");
var wiseQuote5 = Object.create(quoteLibrary);
wiseQuote5.init("If there's a book that you want to read,"," but it hasn't been written yet, ","then you must write it.");

var wiseQuote = [];
wiseQuote.push(wiseQuote1);
wiseQuote.push(wiseQuote2);
wiseQuote.push(wiseQuote3);
wiseQuote.push(wiseQuote4);
wiseQuote.push(wiseQuote5);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomWiseQuote() {
    var i = getRandomInt(5);
    var r = getRandomInt(5);
    var l = getRandomInt(5);
    var wiseGenerator = wiseQuote[i].begin + wiseQuote[r].middle + wiseQuote[l].end;
    return wiseGenerator;
}

//Movie Quotes
var movieQuote1 = Object.create(quoteLibrary);
movieQuote1.init("A martini,", " shaken, ", "not stirred.");
var movieQuote2 = Object.create(quoteLibrary);
movieQuote2.init("I'll get you,", " my pretty, ", "and your dog too!");
var movieQuote3 = Object.create(quoteLibrary);
movieQuote3.init("Frankly,", " my dear, ", "I don't give a damn.");
var movieQuote4 = Object.create(quoteLibrary);
movieQuote4.init("They may take our lives,", " but they will never take, ", "our FREEDOM!");
var movieQuote5 = Object.create(quoteLibrary);
movieQuote5.init("How many times do I have to teach you, ", " just because something works, ", " doesn't mean it can be improvised.");

var movieQuote = [];
movieQuote.push(movieQuote1);
movieQuote.push(movieQuote2);
movieQuote.push(movieQuote3);
movieQuote.push(movieQuote4);
movieQuote.push(movieQuote5);

function randomMovieQuote() {
    var n = getRandomInt(5);
    var e = getRandomInt(5);
    var d = getRandomInt(5);
    var movieGenerator = movieQuote[n].begin + movieQuote[e].middle + movieQuote[d].end;
    return movieGenerator;
}


//Program
var question = prompt("Generate random quote(s)? (Yes/No)");
while (question === "Yes") {
    var generatorType = prompt("Which quote generator would you like? (Movie/Wise)");
    if (generatorType === "Movie") {
        var quoteAmount = Number(prompt("How many quotes should I generate? (1-5)"));
        for (var repeat = 0; repeat < quoteAmount; repeat++) {
        console.log(randomMovieQuote());
        }
    var question = prompt("Generate random quote(s)? (Yes/No)");
    } else if (generatorType === "Wise") {
        var quoteAmount = Number(prompt("How many quotes should I generate? (1-5)"));
        for (var repeat = 0; repeat < quoteAmount; repeat++) {
            console.log(randomWiseQuote());
    }
    var question = prompt("Generate random quote(s)? (Yes/No)");
}
}
if (question === "No") {
    console.log("Quitting...");
}