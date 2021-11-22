const db = require('./../controllers/connection');

var Admin = function(data) {
    this.email = data.email;
    this.name = data.name;
    this.phone = data.phone;
    this.username = data.username;
    this.password = data.password;
}

Admin.getDetail = (email, result) => {
    db.query('select * from admins where email = ?', email, (error,admin) => {
        if (error || admin.length === 0)
        {
            result(null);
        }
        else {
            result(admin[0]);
        }
    })
}

Admin.update = (params, data, result) => {
    const {email, name, phone, username} = data;
    db.query('update admins set email = ?, name = ?, phone = ?, username = ? where email = ?',
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

Admin.changePassword = (params, data, result) => {
    db.query('update admins set password = ? where email = ?',
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

Admin.register = (data, result) => {
    db.query(`insert into admins set ?`, data, (error, res) => {
        if (error) {
            result(null);
        }
        else {
            result("Đăng ký thành công!");
        }
    })
}

Admin.login = (data, result) => {
    db.query(`select * from admins where email = ? and password = ?`, [data.email, data.password], (error, admins) => {
        if (admins.length == 0 || error)
        {
            result(null);
        }
        else {
            result(admins);
        }
    })
}

module.exports = Admin;