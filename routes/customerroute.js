const express = require('express');
const customercontrol = require('../controllers/customercontrol');
const router = express.Router();




router.get('/list', customercontrol.getList);

router.get('/detail/:customerid', customercontrol.getDetail);
router.post('/create', customercontrol.postCreate);




module.exports = router;

