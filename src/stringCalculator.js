function extractDelimiter(numbers) {
    const match = numbers.match(/^\/\/(\[.*?\]|\S)\n/);
    if (!match) return { delimiter: ",", numbersPart: numbers.replace(/\n/g, ",") }; // Default case
  
    let delimiter = match[1];
    if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
      delimiter = delimiter.slice(1, -1); // Remove square brackets for multi-character delimiters
    }
  
    return { delimiter, numbersPart: numbers.slice(match[0].length) }; // Remove delimiter declaration
  }
  
  function add(numbers) {
    if (numbers === "") return 0; // Handle empty string
  
    const { delimiter, numbersPart } = extractDelimiter(numbers);
    const numArray = numbersPart.split(delimiter).filter(n => n !== "").map(Number); // Convert to numbers
  
    return numArray.reduce((sum, num) => sum + num, 0); // Sum up the numbers
  }
  
  module.exports = { add };
  