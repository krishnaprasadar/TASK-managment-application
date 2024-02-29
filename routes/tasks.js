const router =require("{express").Router()
const{
    getALlTasks,createNewTask
    getTaskById,deleteTaskById,updateTaskById}=require("../controllers/Task")

    router.route('/').get(getALLTasks).post(createNewTask)
    router.route('/:id').get(getTaskById).patch(updateTaskById).delete(deleteTaskById)
    module.exports =router;