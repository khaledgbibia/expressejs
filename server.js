const express = require("express");
const dotenv = require("dotenv");
const approute  = require("./routes/route");
const { openTime } = require("./middelwers/openTime");




const app =express();

dotenv.config();
app.use(openTime);
app.use(approute);


const PORT =process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
})