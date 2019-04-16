var quoteLibrary = {
    init: function(begin, middle, end) {
        this.begin = begin;
        this.middle = middle;
        this.end = end;
    }
};

var quote1 = Object.create(quoteLibrary);
quote1.init("You only live once,", " but if you do it right, ", "once is enough.");
var quote2 = Object.create(quoteLibrary);
quote2.init("Insanity is doing the same thing,"," over and over again, ","but expecting different results.");
var quote3 = Object.create(quoteLibrary);
quote3.init("Love all,"," trust a few, ","do wrong to none.");
var quote4 = Object.create(quoteLibrary);
quote4.init("Do what you can,"," with what you have, ","where you are.");
var quote5 = Object.create(quoteLibrary);
quote5.init("If there's a book that you want to read,"," but it hasn't been written yet, ","then you must write it.");
//Created objects and put them inside an array
var quote = [];
quote.push(quote1);
quote.push(quote2);
quote.push(quote3);
quote.push(quote4);
quote.push(quote5);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function randomQuote() {
    var i = getRandomInt(5);
    var r = getRandomInt(5);
    var l = getRandomInt(5);
    var generator = quote[i].begin + quote[r].middle + quote[l].end;
    return generator;
}

console.log(randomQuote());