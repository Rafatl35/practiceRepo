function deleteInvalids(array) {
    if (!Array.isArray(array)) {
      return "Input is not an array";
    }
    const OutputArray = array.filter(element => typeof element === 'number' && !isNaN(element));  
    return OutputArray;
  }
  

  const inputArray = {num: [ 1 , 2 , 3 ]};
  const outputArray = deleteInvalids(inputArray);
  console.log(outputArray);
