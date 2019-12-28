const db = require('../database/connection')


exports.getListData = function (result) {

    let sql = "select * from  sales";

    db.query(sql, function (err, data) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }

        result(null, data);

    });
}

exports.getDetailData = function (salesid, result) {

    let sql = 'select * from sales where sales_id = ?';
    db.query(sql, salesid, function (err, data) {
        if (err) {
            console.log('error: ', err);
        }

        result(null, data);
    });
}

exports.postSales = function () {

}