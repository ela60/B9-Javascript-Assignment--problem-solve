function checkName(name){
    let lastLetter = name.slice(-1)
    let result = false;
    let checkArray = ['a', 'e', 'i', 'o', 'u']
    for (let char of checkArray) {
        if (char === lastLetter) {
            result = true;
        }
    }
    return result ? 'Good Name' :'Bad Name'
}
console.log(checkName('ela'));
console.log(checkName('labonno'));
console.log(checkName('salu'));
console.log(checkName('sal'));