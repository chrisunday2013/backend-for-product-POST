const express = require('express');
const salescontrol = require('../controllers/salescontrol');
const router = express.Router();




router.get('/list', salescontrol.getList);

router.get('/detail/:salesid', salescontrol.getDetail);


module.exports = router;

