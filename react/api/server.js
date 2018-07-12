const express = require("express")();
const cors = require("cors");
const body=require("body-parser")

express.use(body.json({ limit: '50mb' }))

express.use(cors({
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))


express.get("/", function (req, res) {
    let dado = [];
    for (var i = 0; i < 50; i++) {
        dado.push({ nome: "teste" + i })
    }
    res.send(dado);
})


express.listen(8080);

