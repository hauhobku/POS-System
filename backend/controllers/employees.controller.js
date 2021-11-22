const Employee = require('./../models/employees.models');

exports.addEmployee = (req, res) => {
    Employee.addEmployee(req.body, result => {
        if (result === null) {
            res.status(500).send("Thêm không thành công!");
        }
        else {
            res.send(result);
        }
    })
}

exports.getList = (req, res) => {
    Employee.getList(result => {
        if (result === null)
        {
            res.status(500).send(result);
        } 
        else {
            res.send(result);
        }
    })
}

exports.getDetail = (req, res) => {
    Employee.getDetail(req.params.email, result => {
        if (result === null)
        {
            res.status(500).send(result);
        } 
        else {
            res.send(result);
        }
    })
}

exports.updateEmployee = (req, res) => {
    Employee.update(req.params.email, req.body, result => {
        if (result === null)
        {
            res.status(500).send(result);
        } 
        else {
            res.send(result);
        }
    })
}

exports.delete = (req, res) => {
    Employee.delete(req.params.email, result => {
        if (result === null)
        {
            res.status(500).send(result);
        }
        else {
            res.send(result);
        }
    })
}