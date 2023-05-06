const express = require('express');
const tasksControllers = require('./controllers/tasksControllers')
const tasksMiddlewares = require('./middlewares/taskMiddleware')

const router = express.Router();

router.get('/tasks', tasksControllers.getAll);
router.post('/tasks', tasksMiddlewares.validateTitle, tasksControllers.addTask);
router.delete('/tasks/:id', tasksControllers.deleteTask);
router.put('/tasks/:id',
 tasksMiddlewares.validateTitle,
 tasksMiddlewares.validateStatus, 
 tasksControllers.updateTask);

module.exports = router;