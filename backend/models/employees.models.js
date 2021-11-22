const db = require('./../controllers/connection');

var Employee = function(data) {
    this.email = data.email;
    this.name = data.name;
    this.phone = data.phone;
    this.salary = data.salary;
    this.username = data.username;
    this.password = data.password;
}

Employee.getList = (result) => {
    db.query('select * from employees', (error, employees) => {
        if (error) {
            result(null);
        }
        else {
            result(employees);
        }
    })
}

Employee.getDetail = (email, result) => {
    db.query('select * from employees where email = ?', email, (error, employees) => {
        if (error || employees.length === 0)
        {
            result(null);
        }
        else {
            result(employees[0]);
        }
    })
}

Employee.update = (params, data, result) => {
    const {email, name, phone, salary, username, password} = data;
    db.query('update employees set email = ?, name = ?, phone = ?, salary = ?, username = ?, password = ? where email = ?',
        [email, name, phone, salary, username, password, params], (error, res) => {
            if (error) {
                result(null);
            }
            else {
                result(data);
            }
        } 
    )
}

Employee.delete = (email, result) => {
    db.query('delete from employees where email = ?', email, (error, res) => {
        if (error)
        {
            result(null);
        }
        else {
            result("Xóa thành công!");
        }
    })
}

Employee.addEmployee = (data, result) => {
    db.query('insert into employees set ?', data, (error, res) => {
        if (error) {
            result(null);
        }
        else {
            result("Thêm thành công!");
        }
    })
}

module.exports = Employee;