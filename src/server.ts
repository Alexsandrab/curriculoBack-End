import express, { request, response } from "express";
const bodyParser = require('body-parser');
import mongoose from "mongoose";
import routes from "./routes";

const app = express();
mongoose.connect('mongodb://localhost/curriculo');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}));
app.use(express.json());
app.use(routes);


app.get('/dadosPessoais', (request, response) => {

response.send("ok")
}) 

app.listen(3000, ()=>{
    console.log("Server is listening");
})