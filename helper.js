exports.writeToConsole = (results) => {
  var count = 0, key;
  for (key in results) {
    if (results.hasOwnProperty(key)) 
    count++;
  }
  count > 1 ? console.log(`You have ${count} tasks`) : console.log(`You have ${count} task`)
};


