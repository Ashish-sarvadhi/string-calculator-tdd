function add(numbers) {
    //handled empty string
    if (numbers === "") return 0; 
    //converted string to number
    return parseInt(numbers); 
  }
  
  module.exports = { add };
  