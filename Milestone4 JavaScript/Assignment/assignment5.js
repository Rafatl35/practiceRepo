function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
      return "Invalid input";
    }  
    let totalIncome = 0;
    for (let i = 0; i < arr.length; i++) {
      totalIncome += arr[i];
    }
    let totalTax = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3000) {
        totalTax += arr[i] * 0.20;
      }
    }   
    const netIncome = totalIncome - totalTax;
    const savings = netIncome - livingCost;
    
    if (savings >= 0) {
      return savings;
    } else {
      return "earn more";
    }
  }
  const allPayments = monthlySavings([ 1000 , 2000 , 2500 ] , 5000 ) 
  console.log(allPayments); 
  