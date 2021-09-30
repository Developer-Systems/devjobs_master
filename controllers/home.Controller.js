const mongoose = require('mongoose');

exports.mostrarTrabajos = (req, res, next) => {
    const vacantes = await Vacante.find();
    if(!vacantes) return next();
}