const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(Ralph){
    cats.push("Ralph");
    return Ralph
}

function destructivelyPrependCat(Bob){
    cats.unshift("Bob");
    return Bob
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield);
    return Garfield
}

function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo);
    return Milo
}

function appendCat(Broom){
    const kitty = [...cats, "Broom"];
    return kitty
}

function prependCat(Arnold){
    const allCities = ["Arnold", ...cats];
    return allCities
    
}

function removeLastCat(Garfield){
    const Cake = cats.slice();
    Cake.pop();
    return Cake
}

function removeFirstCat(Milo){
    const Bake = cats.slice();
    Bake.shift();
    return Bake
}

console.log(cats)
console.log(destructivelyAppendCat(Ralph))
console.log(destructivelyPrependCat(Bob))
console.log(destructivelyRemoveLastCat(Garfield))
console.log(destructivelyRemoveFirstCat(Milo))
console.log(appendCat(Broom))
console.log(prependCat(Arnold))
console.log(removeLastCat(Garfield))
console.log(removeFirstCat(Milo))