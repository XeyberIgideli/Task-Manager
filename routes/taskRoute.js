import express from 'express'
import taskOperations from '../controllers/taskController.js'

const router = express.Router()

router.post('/', taskOperations.createTask)
router.get('/tasks', taskOperations.getTasks)
router.get('/:id', taskOperations.getTask)
router.delete('/:id', taskOperations.deleteTask)
router.patch('/:id', taskOperations.updateTask)

export default router