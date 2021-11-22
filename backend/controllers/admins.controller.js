const jwt = require('jsonwebtoken');
const Admin = require('../models/admins.models');

exports.getDetail = (req, res) => {
    if (req.user.email === req.params.email)
    {
        Admin.getDetail(req.params.email, result => {
            if (result === null)
            {
                res.status(500).send(result);
            } 
            else {
                res.send(result);
            }
        })
    }
    else {
        res.status(400).send("Không thể xem chi tiết người dùng này!");
    }
}

exports.updateAdmins = (req, res) => {
    if (req.user.email === req.params.email)
    {
        Admin.update(req.params.email, req.body, result => {
            if (result === null)
            {
                res.status(500).send(result);
            } 
            else {
                res.send(result);
            }
        })
    }
    else {
        res.status(400).send("Không thể cập nhật người dùng này!");
    }
}

exports.changePassword = (req, res) => {
    if (req.user.email === req.params.email)
    {
        Admin.changePassword(req.params.email, req.body, result => {
            if (result === null)
            {
                res.status(500).send(result);
            } 
            else {
                res.send(result);
            }
        })
    }
    else {
        res.status(400).send("Không thể đổi mật khẩu người dùng này!");
    }
}

exports.login = (req, res) => {
    Admin.login(req.body, result => {
        if (result === null)
        {
            res.status(500).send("Đăng nhập sai tài khoản hoặc mật khẩu!");
        }
        else {
            const token = jwt.sign(
                {
                    email: result[0].email,
                    username: result[0].username,
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "1h" }
            );

            const admin = {
                email: result[0].email,
                username: result[0].username,
                name: result[0].name,
                phone: result[0].phone,
            };

            res.send({
                message: "Đăng nhập thành công!",
                token,
                admin,
            });
        }
    })
}

exports.register = (req, res) => {
    Admin.register(req.body, result => {
        if (result === null) {
            res.status(500).send("Đăng ký không thành công!");
        }
        else {
            res.send(result);
        }
    })
}