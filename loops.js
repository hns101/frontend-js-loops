// ==========================================
// Opdracht 1. Maak een for loop die het volgende patroon in de terminal print:
// Verwachte uitkomsten:
// *
// **
// ***
// ****
// *****

// Tip: je kunt de .repeat() methode gebruiken om een karakter een n aantal keer te herhalen...
// Dit heb je nog niet geleerd, maar bekijk hiervoor dit MDN-artikel eens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
// ==========================================

for (i = 0; i < 6; i++) {
    let f = "*";
    console.log("*".repeat(i));
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de laatste (vijfde) loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================


for (i = 0; i < 6; i++) {
    if(i === 5){
        console.log("klaar!")
    }else {
        console.log("Loop...");
    }
}


// ==========================================
// Opdracht 3: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================//

// stap 1 forloop  >10
// stap 2 if statements 0>3
// stap 3  if els  3-5
// stap 4 else  >6

for (i = 0; i < 10; i++) {
    if(i <= 2){
        console.log(i);
    } else if (i <= 5){
        console.log(">"+i);
    }else {
        console.log(">>"+i);
    }
}



// ==========================================
// Opdracht 4 (BONUS): schrijf een for-loop die van 0 tot 100 loopt en de getallen print.
// Echter, voor veelvouden van 3 print je "Fizz" in plaats van het nummer, en voor veelvouden van 5 print je "Buzz".
// Voor getallen die zowel een veelvoud van 3 als van 5 zijn, print je "FizzBuzz"
// Verwachte uitkomsten:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
// ==========================================

// stap 1 forloop 0 tot 100
// stap 2 if /3 = fizz
// stap 3 else if  / 5 = buzz
// stap 4 voor FizzBuss in door bijde oplossingen samen te voegen met een &&

for (i = 1; i < 101; i++) {
    if (i % 3 == false && i % 5 == false){
        console.log("FizzBuzz");
    } else if ( i % 3 == false){
        console.log("Fizz");
    } else if ( i % 5 == false){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}