function processArray(arr) {
  return arr.map(num => {
      if (num % 2 === 0) {     
          return num * num;
      } else {    
          return num ** 3;
      }
  });
}


function formatArrayStrings(strings, number) {
    if (strings.length !== numbers.length) {
        throw new Error(']Both arrays must have the same length');
    }

    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}


const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); 

const strings = ["My", "First", "JS", "Code", "Yayy!"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);
