const findTheOldest = function() {
  let newArray = people.map(function(person) {
    person.age = person.yearOfDeath - person.yearOfBirth;
    return person;
});

    let oldest = newArray.reduce((accumulator, currentValue) => accumulator.age > currentValue.age ? accumulator : currentValue);
    return oldest.name;
};

// Do not edit below this line
module.exports = findTheOldest;
