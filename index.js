const { Spot } = require('@binance/connector')
const {isEmty} = require('infinity-utils')
module.exports = {
    callTrade: function(key, secret, pair, type, price, quantity) {
        if (isEmty(key) || isEmty(secret)) {
            console.err('Key or secret is not empty');
            return;
        }
        const client = new Spot(key, secret, { baseURL: 'https://api.binance.com' })
        var success = false;
        (async () => {
            while (!success) {
                try {
                    var x = await client.newOrder(pair, type, 'LIMIT', {
                        price: price,
                        quantity: quantity,
                        timeInForce: 'GTC'
                    });
                    console.log(x);
                    success = true;
                } catch (err) {
                    console.log(err.message)
                }
            }
        }) ();
    }
}