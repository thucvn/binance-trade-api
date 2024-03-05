API of binance trade
```
const { callTrade } = require('binance-trade-api');
callTrade(API_KEY, SECRET, PAIR, TYPE, PRICE, QUANTITY);
```
*API_KEY*: key of your binance account\
*SECRET*: secret key of your binance account\
*PAIR*: Pair to trade( eg: BTCUSDT)\
*TYPE*: Must be SELL or BUY\
*PRICE*: Price trading\
*QUANTITY*: Number tokens need to be trade