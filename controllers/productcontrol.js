const model = require('../models/productsmodels');


exports.getList = function (req, res) {

    model.getListData(function (err, result) {

        if (err) {
            console.log(err);
            res.send(err);
        }

        res.send(result);
    });

}

exports.getDetail = function (req, res) {

    model.getDetailData(req.params.productid, function (err, result) {

        if (err) {
            console.log(err);
            res.send(err);
        }

        res.send(result)

    });

}

exports.postCreate = function (req, res) {


    let data = [req.body.productname, req.body.ram, req.body.rom, req.body.os, req.body.color, req.body.brand, req.body.yearOfMake, req.body.model, req.body.networkinfo, req.body.serialno, req.body.imei, req.body.camera, req.body.dateofentry];

    model.postCreateData(data, function (err, values) {

        if (err) {
            console.log(err);
        }

        res.send('Congratulation Data successfully created');
    });

}