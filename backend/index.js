require("dotenv").config();
const express= require("express");
const {connect} = require("./src/config/db")
const cors= require("cors");

//routes import //
const route= require("./src/routes/routes");


const PORT= process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors())


app.use("/cointab",route)



app.listen(PORT,async()=>{
    await connect();
    console.log(`listenig on http://loaclhost:${8080}`)
})


