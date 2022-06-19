//Funcionalidad de Express
const {Router} = require("express");
const router = Router();

const apiRoute = '/sistemaSalud';
//Instanciar objeto de studentsController
const citas = require('../controllers/citas_controller');

//Routers CRUD

//Router Students
router.get(apiRoute + '/citas', citas.getAll);
router.post(apiRoute + '/citas', citas.create);
//router.put(apiRoute + '/citas', citas.update);
//router.delete(apiRoute + '/citas', citas.delete);

module.exports = router;