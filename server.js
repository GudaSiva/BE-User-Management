const express = require("express")

const app = express()

app.get("/", (request,response)=>{
    response.send("This is testing in main site")
    console.log("this is learning purpose")
})
app.listen(3000)