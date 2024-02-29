const{CustomAPIError} = require("../errors/custum-api-errors")
const errorHandlerMiddleware =(err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.statuscode).json({msg:err.message})
    }
    return res.status(500).json({msg:"something went wrong try again"})
    
}
mondule.exports=errorHandlerMiddleware