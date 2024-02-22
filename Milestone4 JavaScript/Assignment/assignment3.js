function filterNumbers(arr) {
    if (!Array.isArray(arr)) {
      return "Error: Input is not an array.";
    }
  
    const filteredArray = arr.filter(element => typeof element === 'number' && !isNaN(element));
  
    return filteredArray;
  }
  

  const inputArray = [ 1 , 2 , -3 ]  ;
  const outputArray = filterNumbers(inputArray);
  console.log(outputArray);
