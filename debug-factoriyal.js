// debug function . bar bar console diye value check kora ;;;


function getfactoriyal(number) {
    let factoriyal = 1;
    for (let i = 1; i <= number; i++) {
        factoriyal = factoriyal * i;
    }
    return factoriyal;
}

const getmyfactorial = getfactoriyal(8);
console.log(getmyfactorial);






function factoriyalnumber(num) {

    factoriyal = 1;
    for (let i = 1; i <= num; i++) {
        // console.log(i);
        factoriyal = factoriyal * i;
        console.log(i, factoriyal);
    }
    return factoriyal;
}

const getmynumber = factoriyalnumber(8);
console.log(getmynumber);
