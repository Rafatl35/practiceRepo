function filterNumbers(arr) {
    if (!Array.isArray(arr)) {
      return "Error: Input is not an array.";
    }
  
    const filteredArray = arr.filter(element => typeof element === 'number' && !isNaN(element));
  
    return filteredArray;
  }
  
  // Example usage:
  const inputArray = {num: [ 1 , 2 , 3 ]}   ;
  const outputArray = filterNumbers(inputArray);
  console.log(outputArray); // Output: [1, 18, -19]
