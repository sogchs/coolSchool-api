const express = require('express');
const router = express.Router();
const Classroom = require('../controllers/classroom.controller');
const secure = require('../middlewares/secure.mid');


router.post('/', secure.isAuthenticated, Classroom.createClassroom);
router.get('/', secure.isAuthenticated, Classroom.listClassroom);
router.get('/:id', secure.isAuthenticated, Classroom.detailClassroom);
router.put('/:id', secure.isAuthenticated, Classroom.editClassroom);
router.post('/:id', secure.isAuthenticated, Classroom.deleteClassroom);

module.exports = router;