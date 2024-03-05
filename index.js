const { Spot } = require('@binance/connector')
const {isEmty} = require('infinity-utils')
const {loopTask} = require('run-loop-til-success')
module.exports = {
    callTrade: function(key, secret, pair, type, price, quantity) {
        if (isEmty(key) || isEmty(secret)) {
            console.err('Key or secret is not empty');
            return;
        }
        const client = new Spot(key, secret, { baseURL: 'https://api.binance.com' })
        loopTask(client.newOrder(pair, type, 'LIMIT', {
            price: price,
            quantity: quantity,
            timeInForce: 'GTC'
        }));
    }
}