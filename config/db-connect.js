const mongoose=require("mongoose")

const Dbconnection=(url) =>{
    return mongoose.connect(url,{
        useNewUrlparser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true

    })
}
module.exports =Dbconnection;