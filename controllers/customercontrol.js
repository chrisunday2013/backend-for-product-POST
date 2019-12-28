const model = require('../models/customermodel');


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

    model.getDetailData(req.params.customerid, function (err, result) {

        if (err) {
            console.log(err);
            res.send(err);
        }

        res.send(result)

    });

}

exports.postCreate = function (req, res) {
    let data = [req.body.customerphone, req.body.fullname, req.body.birthday, req.body.datecreated];

    model.postCreateData(data, function (err, values) {

        if (err) {
            console.log(err);
        }

        res.send('Congratulation Data successfully created');
    });

}