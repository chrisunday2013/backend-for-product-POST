const express = require('express');
const app = express();
const db = require('./database/connection');
const port = 4000;
let now = new Date();
let customerroute = require('./routes/customerroute');
let paymentmetroute = require('./routes/paymentmetroute');
let productroute = require('./routes/productroute');
let salesroute = require('./routes/salesroute');


app.use(express.json());
app.use(express.urlencoded());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})



app.use('/customer', customerroute);
app.use('/products', productroute);
app.use('/paymentMethod', paymentmetroute);
app.use('/sales', salesroute);

app.listen(port, function() {
  console.log(`listening at port ${port}`)
});
