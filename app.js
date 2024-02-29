const express = require("express");
const taskRoutes =require("./routes/tasks");
const Dbconnection=require("./config/db-connect");
const errorHandlerMiddleware= require("./middleware/eroor-handlers");
const notfound =require("./middleware/not-found");
const app =express()




//middleware
app.use(express.static('./public'))
app.use(express.json())
app.use(notfound)
app.use(errorHandlerMiddleware)

//routes
app.use('api/v1/tasks',taskRoutes);


const PORT =process.env.PORT||9000;

const  startServer =async () =>{
    try{
        await Dbconnection("mongobdb://localhost:27017/taskDb")
        app.listen(PORT,() => {
            console.log(`server running on PORT ${port}...`)
        })
    }catch (error){
        console.log(error)

    }
}
 startServer()