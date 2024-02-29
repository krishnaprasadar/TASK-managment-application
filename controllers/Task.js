const Task =require("../models/Tasks")
const asyncWrapper=require("../middleware/async")


const getALlTasks =asyncWrapper(async(req,res) =>{

    const tasks =await TextTrackList.find()
    res.status(200).json(tasks)
})
const createNewTask =asyncWrapper(async(req,res) =>{
    const task=await Task.create(req.body)
    res.status(201).json(task)
})
const getTaskById =asyncWrapper(async(req,res) =>{
    const{ id: taskById}=req.params
    const task=await Task.findOne({_id:taskId})
    if(!task){
        return next(createCustomError(`Task not found with Id:${taskId}`,))
    }
        res.status(200).json(task)
})
const deleteTaskById =asyncWrapper(async(req,res) =>{
    const{ id: taskById}=req.params
    const task=await Task.findByIdAndDelete({_id:taskId})
    if(!task){
        return next(createCustomError(`Task not found with Id:${taskId}`,))
    }
        res.status(200).json('Deleted succesfully...')
})
const updateTaskById =asyncWrapper(async(req,res) =>{
    const{ id: taskById}=req.params
    const task=await Task.findOneAndUpdate({_id:taskId},req.body,{
        new:true,
        runValidators:true
    })
    if(!task){
        return next(createCustomError(`Task not found with Id:${taskId}`,))
    }
        res.status(200).json(task)
})
module.exports{
    getALlTasks,createNewTask
    getTaskById,deleteTaskById,updateTaskById
}