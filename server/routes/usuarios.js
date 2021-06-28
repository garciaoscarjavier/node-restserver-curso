const express = require('express');
const Usuari = require('../models/usuario');

const app = express();

app.get('/usuario', function(req, res) {
    res.json('get usurio');
});
app.post('/usuario', function(req, res) {
    let body = req.body;

    let usuario = new Usuari({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role

    });

    usuario.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok = true,
            usuario: usuarioDB
        });
    });



});

app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });

});

app.delete('/usuario', function(req, res) {
    res.json('delet usurio');
});

module.exports = app;