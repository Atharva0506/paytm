import express from "express";


const app = express()

app.get("/",(req,res)=>{
    res.json({
        "status":"running"
    })
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT} `)
})