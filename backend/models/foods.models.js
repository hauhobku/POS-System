const db = require('./../controllers/connection');

var Foods = function(data) {
    this.id = data.id,
    this.name = data.name,
    this.img = data.img,
    this.price = data.price
}

Foods.getList = (result) => {
    db.query('select * from foods', (error, foods) => {
        if (error) {
            result(null);
        }
        else {
            result(foods);
        }
    })
}

Foods.getDetail = (id, result) => {
    db.query('select * from foods where id = ?', id, (error, foods) => {
        if (error || foods.length === 0)
        {
            result(null);
        }
        else {
            result(foods[0]);
        }
    })
}

Foods.update = (params, data, result) => {
    const {id, name, img, price} = data;
    db.query('update foods set id = ?, name = ?, img = ?, price = ? where id = ?',
        [id, name, img, price, params], (error, res) => {
            if (error) {
                result(null);
            }
            else {
                result(data);
            }
        } 
    )
}

Foods.delete = (id, result) => {
    db.query('delete from foods where id = ?', id, (error, res) => {
        if (error)
        {
            result(null);
        }
        else {
            result("Xóa thành công!");
        }
    })
}

Foods.addFood = (data, result) => {
    db.query(`insert into foods set ?`, data, (error, res) => {
        if (error) {
            result(null);
        }
        else {
            result("Thêm thành công!");
        }
    })
}

module.exports = Foods;