/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
	let profit = 0;
	let buyStock = prices[0];
	for (let i = 1; i < prices.length; i++) {
		if (buyStock > prices[i]) {
			buyStock = prices[i];
		}
		const currentProfit = prices[i] - buyStock;
		if (currentProfit > profit) {
			profit = currentProfit;
		}
	}

	return profit;
};