const express = require('express');
const router = new express.Router();
const controllers = require('../controllers/studentController');

// Routes
router.post('/student/register', controllers.studentpost);
router.get('/student/getAllstudent', controllers.getStudent);
router.get('/student/singlestudent/:id', controllers.getSingleStudent);
router.delete('/student/deletestudent/:id', controllers.deleteStudent);
router.put('/student/updatestudent/:id', controllers.updateStudent);

module.exports = router;