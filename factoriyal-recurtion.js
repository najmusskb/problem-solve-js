//factoriyal-recurtion-function

// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// 4! = 4*3 * 2 * 1
// 5! = 5*4*3 * 2 * 1


// formula is n! = n(n-1)!

// 4! = 4 * 3!
// 5! = 5 * 4!
// 6 != 6 * 5!
// 7 != 7 * 6!

function factoriyal(n) {
    if (n == 1) {
        return 1;
    }
    return n * factoriyal(n - 1);
}

const myfaCtoriyal = factoriyal(5);
console.log(myfaCtoriyal);
function factoriyal(n) {
    if (n == 1) {
        return 1;
    }
    return n * factoriyal(n - 1);
}

const myFactoriyal = factoriyal(4);
console.log(myFactoriyal);





function factoriyal(n) {
    if (n == 1) {
        return 1;
    }
    return n * factoriyal(n - 1);
}

const Myfactoriyal = factoriyal(3);
console.log(Myfactoriyal);



function factoriyal(n) {
    if (n == 1) {
        return 1;
    }
    return n * factoriyal(n - 1);
}

const mYYfactoriyal = factoriyal(2);
console.log(mYYfactoriyal);









function factoriyal(n) {
    if (n == 1) {
        return 1;
    }
    return n * factoriyal(n - 1);
}

const myfactoriyaL = factoriyal(1);
console.log(myfactoriyaL);


