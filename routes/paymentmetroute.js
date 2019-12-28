const express = require('express');
const customercontrol = require('../controllers/customercontrol');
const paymentMetcontrol = require('../controllers/paymentMetcontrol')
const router = express.Router();




router.get('/list', paymentMetcontrol.getList);

router.get('/detail/:paymentmethodid', paymentMetcontrol.getDetail);


module.exports = router;

