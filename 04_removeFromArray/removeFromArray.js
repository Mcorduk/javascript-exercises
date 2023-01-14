const removeFromArray = function(inputArray, ...toRemove) {

    inputArray = inputArray.filter( function( el ) {
        return toRemove.indexOf( el ) < 0;
      } );
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;

