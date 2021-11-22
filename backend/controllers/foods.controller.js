const Foods = require('./../models/foods.models');

exports.addFoods = (req, res) => {
    Foods.addFood(req.body, result => {
        if (result === null) {
            res.status(500).send("Thêm không thành công!");
        }
        else {
            res.send(result);
        }
    })
}

exports.getList = (req, res) => {
    Foods.getList(result => {
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
    Foods.getDetail(req.params.id, result => {
        if (result === null)
        {
            res.status(500).send(result);
        } 
        else {
            res.send(result);
        }
    })
}

exports.updateFoods = (req, res) => {
    Foods.update(req.params.id, req.body, result => {
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
    Foods.delete(req.params.id, result => {
        if (result === null)
        {
            res.status(500).send(result);
        }
        else {
            res.send(result);
        }
    })
}