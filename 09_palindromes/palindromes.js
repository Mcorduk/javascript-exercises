const palindromes = function (str) {
    let noSpecial = str.replace(/[^a-zA-Z0-9 ]/g, '');

    let inputArray = noSpecial.split("");

    let outputArray = inputArray.reverse();

    let output = outputArray.join("");

    if(output = noSpecial){
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
