
const names = ['abul', 'babul', 'jabul', 'dabul', 'fabul', 'cabul'];

function removeduplicate(names) {

    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element);


    }

}

const Uniquenames = removeduplicate(names);
console.log(Uniquenames);




// _______________________________________________________________









// for of diye same operation vvi  remove duplicate name array 


const names = ['abul', 'babul', 'jabul', 'dabul', 'fabul', 'cabul', 'abul', 'abul', 'babul', 'jabul', 'dabul', 'fabul', 'babul', 'jabul', 'dabul', 'fabul', 'babul', 'jabul', 'dabul', 'fabul', 'babul', 'jabul', 'dabul', 'fabul', 'babul', 'jabul', 'dabul', 'fabul', 'babul', 'jabul', 'dabul', 'fabul', 'babul', 'jabul', 'dabul', 'fabul',];
function removeduplicate(names) {
    const unique = [];
    for (const element of names) {
        // console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }

    return unique;
}
const uniquenames = removeduplicate(names);
console.log(uniquenames);