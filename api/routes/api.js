const router = require('express-promise-router')();
const alunoController = require('../controllers/alunoController');
const almocoController = require('../controllers/almocoController');

router.get('/alunos', alunoController.listAllAlunos);

router.get('/alunos/:id', alunoController.findAlunoById);

router.post('/alunos', alunoController.createAluno);

router.post('/alunos/:id', alunoController.updateAlunoById);

router.delete('/alunos/:id', alunoController.deleteAlunoById);

router.get('/almocos', almocoController.list);

module.exports = router;