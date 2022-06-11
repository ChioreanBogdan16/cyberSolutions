function fizzbuzz(number) {
    if (typeof (number) != "number") return "Please insert a NUMBER" //verificam daca s-a introdus un numar 
    if (number % 3 === 0 && number % 5 === 0) { //verificam daca numarul este divizibil cu 3 si 5 
        return "FizzBuzz"
    }
    else {
        if (number % 3 === 0) return "Fizz"

        else if (number % 5 === 0) return "Buzz"

    }

    return number.toString() //daca niciun caz nu se verifica se returneaza numaru convertit in string conform cerinta 
}


function testCases() {  // verifica functionalitatea functiei fizzbuzz pentru un
    let a = -10000   // limita inferioara interval de verificare 
    let b = 10000000// limita superioara interval de verificare 
    let ok = true;
    if (fizzbuzz("a") != "Please insert a NUMBER") { ok = 0 }   //verificam functionalitatea functiei daca se introduce litera
    if (fizzbuzz() != "Please insert a NUMBER") { ok = 0 }   //verificam functionalitatea functiei daca nu se introduce nimic
    for (let i = a; i <= b && ok === true; i++) {
        // console.log(i, fizzbuzz(i), typeof (fizzbuzz(i)))  //afisam toate perechile: i, numar,rezultat functie buzzfizz

        if (i % 3 === 0 && i % 5 === 0) {
            if (fizzbuzz(i) != "FizzBuzz") { ok = false }
        }

        else {
            if (i % 3 === 0) if (fizzbuzz(i) != "Fizz") { ok = false }

            else {
                if (i % 5 === 0) if (fizzbuzz(i) != "Buzz") { ok = false }
                else if (typeof (fizzbuzz(i)) != "string") { ok = false }
            }
        }
    }
    return ok ? "Functia este  corecta " : "Functia nu este corecta "
}

console.log(testCases())
console.log(fizzbuzz())
