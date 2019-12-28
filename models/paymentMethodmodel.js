const db = require('../database/connection')


exports.getListData = function (result) {

    let sql = "select * from  paymentMethod";

    db.query(sql, function (err, data) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }

        result(null, data);

    });
}

exports.getDetailData = function (paymentMethodid, result) {

    let sql = 'select * from paymentMethod where payment_id = ?';
    db.query(sql, paymentmethodid, function (err, data) {
        if (err) {
            console.log('error: ', err);
        }

        result(null, data);
    });
}

exports.postPaymentmethod = function () {

}