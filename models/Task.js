const mongoose =require("mongoose")
const TaskSchema =new mongo.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[40,'Name can not be more than 40 characters']
    },
    completed:{
        type:Boolean,
        deafult:false,
    },
})

mondule.exports=mongoose.model('task',Taskschema)