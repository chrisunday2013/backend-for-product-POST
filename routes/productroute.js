const express = require('express');
const productcontrol = require('../controllers/productcontrol');
const router = express.Router();




router.get('/list', productcontrol.getList);

router.get('/detail/:productid', productcontrol.getDetail);
router.post('/create', productcontrol.postCreate);

module.exports = router;

