

// input = array of dollar values
// output = the maximum diff between values where idx2 - idx1
    // idx2 - must be higher than idx1
    // return value should be an positive number that represents the largest diff possible between idx2 and idx1

// index = minutes passed stock opening
// values = price in dollars

//examples:
//stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
// get_max_profit(stock_prices_yesterday)
// # returns 6 (buying for $5 and selling for $11)

//stock_prices_yesterday = [12, 2, 3, 18, 11, 32]
// get_max_profit(stock_prices_yesterday)
// # returns 30 (buying for $2 and selling for $32)

//map each value in the array to all possible profits
// reduce each array to its maximum possible profit
// reduce outer array to its maximum val



// No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

function getMaxProfit(stock_prices) {
  var maxesArray = stock_prices.map(function(p, i) {
    if(stock_prices[i + 1]) {
      var profits = stock_prices.slice(i + 1).map(val => val - p);
      return profits.reduce((a, c) => a > c ? a : c);
    }else {
      return 0
    }
  });

  return maxesArray.reduce((a, c) => a > c ? a : c);
}