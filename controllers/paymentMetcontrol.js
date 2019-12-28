const model = require('../models/paymentMethodmodel');


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

    model.getDetailData(req.params.paymentmethodid, function (err, result) {

        if (err) {
            console.log(err);
            res.send(err);
        }

        res.send(result)

    });

}