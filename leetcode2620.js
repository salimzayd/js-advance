function createcounter(start) {

    let count = start;

    return function() {

        return count++;
    }

}


const pluscounter = createcounter(10);
console.log(pluscounter());
console.log(pluscounter());
console.log(pluscounter());
