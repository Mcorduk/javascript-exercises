const sumAll = function(first, second) {
    let sum = second;
    if (Number(first) !== first || Number(second) !== second  || first < 0 || second < 0){

        return "ERROR";

    } else if(second > first){ 
            for(i = 0; i < (second - first); i++){
                   
                    sum = sum + (second - (i + 1));
                    
            }return sum;
    } else{
        for(i = 0; i < (first - second); i++){
                   
            sum = sum + (first - (i));
    }
    return sum;
            

}};

// Do not edit below this line
module.exports = sumAll;