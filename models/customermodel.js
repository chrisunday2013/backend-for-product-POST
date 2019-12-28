const db = require('../database/connection')


exports.getListData = function (result) {

    let sql = "select * from  customers";

    db.query(sql, function (err, data) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }

        result(null, data);

    });
}

exports.getDetailData = function (customerid, result) {

    let sql = 'select * from customers where customer_id = ?';
    db.query(sql, customerid, function (err, data) {
        if (err) {
            console.log('error: ', err);
        }

        result(null, data);
    });
}

exports.postCreateData= function (data, result) {
    let stmt = "insert into customers(customerphone,fullname,birthday,datecreated) values(?,?,?,?)";
    db.query(stmt, data, function (err, values) {
        if (err) {
        console.log("error: ", err);
        result(err, null);
    }
   result(null, values);
})

}