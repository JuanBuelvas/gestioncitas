const citasController = {};
const citas = require('../citas.json');

citasController.getAll = (req, res) => {
    res.json(citas);
}

citasController.create = (req, res) => {
    const id = citas.length+1;
    const newCita = req.body;

    newCita["Id"] = id;
    citas.push(newCita);
    res.json({newCita});
}


module.exports = citasController;
