const  express =require("express");
const dotenv=require("dotenv").config()


const app =express()



const PORT =process.env.PORT

app.listen(PORT,()=>{
console.log(`server is connect on ${PORT}`);
})