function getfactorial(number) {

    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;



    }
    return factorial;
}

const myFactoriyal = 5;
const result = getfactorial(myFactoriyal); {

    console.log("this is the first while factorial:", result);
}