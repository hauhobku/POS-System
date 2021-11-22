const db = require('./../controllers/connection');

var Customer = function(data) {
    this.email = data.email;
    this.name = data.name;
    this.phone = data.phone;
    this.username = data.username;
    this.password = data.password;
}

Customer.getList = (result) => {
    db.query('select * from customers', (error, customers) => {
        if (error) {
            result(null);
        }
        else {
            result(customers);
        }
    })
}

Customer.getDetail = (email, result) => {
    db.query('select * from customers where email = ?', email, (error, customers) => {
        if (error || customers.length === 0)
        {
            result(null);
        }
        else {
            result(customers[0]);
        }
    })
}

Customer.update = (params, data, result) => {
    const {email, name, phone, username} = data;
    db.query('update customers set email = ?, name = ?, phone = ?, username = ? where email = ?',
        [email, name, phone, username, params], (error, res) => {
            if (error) {
                result(null);
            }
            else {
                result(data);
            }
        } 
    )
}

Customer.changePassword = (params, data, result) => {
    db.query('update customers set password = ? where email = ?',
        [data.password, params], (error, res) => {
            if (error) {
                result(null);
            }
            else {
                result(data);
            }
        }
    )
}

Customer.delete = (email, result) => {
    db.query('delete from customers where email = ?', email, (error, res) => {
        if (error)
        {
            result(null);
        }
        else {
            result("Xóa khách hàng thành công!");
        }
    })
}

Customer.register = (data, result) => {
    db.query(`insert into customers set ?`, data, (error, res) => {
        if (error) {
            result(null);
        }
        else {
            result("Đăng ký thành công!");
        }
    })
}

Customer.login = (data, result) => {
    db.query(`select * from customers where email = ? and password = ?`, [data.email, data.password], (error, customers) => {
        if (customers.length == 0 || error)
        {
            result(null);
        }
        else {
            result(customers);
        }
    })
}

module.exports = Customer;