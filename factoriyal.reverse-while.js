function reverse(num) {

    let factorial = 1;

    let i = num;

    while (i >= 1); {

        factorial = factorial * i;
        i--;
    }

    return factorial;
}

const myfactoriyal = reverse(5);

console.log(myfactoriyal);