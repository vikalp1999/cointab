require("dotenv").config();
const express= require("express");
const {connect} = require("./config/db");
const cors= require("cors");

//routes import //
const route= require("./routes/routes");


const PORT= process.env.PORT;
const app = express();
app.use(cors())
app.use(express.json());

app.use("/cointab",route)



app.listen(PORT,async()=>{
    await connect();
    console.log(`listenig on http://loaclhost:${8080}`)
})


