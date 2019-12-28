const db = require('../database/connection')


exports.getListData = function (result) {

    let sql = "select * from  products";

    db.query(sql, function (err, data) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }

        result(null, data);

    });
}

exports.getDetailData = function (productid, result) {

    let sql = 'select * from products where product_id = ?';
    db.query(sql, productid, function (err, data) {
        if (err) {
            console.log('error: ', err);
        }

        result(null, data);
    });
}

exports.postCreateData= function (data, result) {
    let stmt = "insert into products(productname,ram,rom,os,color,brand,yearOfMake,model,networkinfo,serialno,imei,camera,dateofentry) values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(stmt, data, function (err, values) {
        if (err) {
        console.log("error: ", err);
        result(err, null);
    }
   result(null, values);
})

}