const getTheTitles = function(obj) {
    const names = [];
    for (const key in obj) {
      if (obj[key] && obj[key].title) {
        names.push(obj[key].title);
      }
    }
    return names;
  }

// Do not edit below this line
module.exports = getTheTitles;
