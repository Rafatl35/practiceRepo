function calculateMoney(ticketSale){
    const ticketPrice = 120;
    const gardPayment = 500;
    const lunchCost = 8 * 50;

    if(ticketSale >= 0){
        ticketSellPrice = ticketPrice * ticketSale;
        dailyCost = gardPayment + lunchCost;
        dailyRevenue = ticketSellPrice - dailyCost;
        return dailyRevenue;
    }
    else{
        return "Invalid Number";
    }

}
total = calculateMoney(1055);
console.log(total);