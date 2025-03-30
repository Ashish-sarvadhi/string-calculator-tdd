function add(numbers) {
    //handled empty string
    if (numbers === "") return 0; 
    const numArray = numbers.split(/[\n,]/).map(num => parseInt(num)); // Convert to array of numbers
  return numArray.reduce((sum, num) => sum + num, 0); // Sum up the numbers
  }
  
  module.exports = { add };
  