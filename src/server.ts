import express, { request, response } from "express";
const bodyParser = require('body-parser');
import mongoose from "mongoose";
import routes from "./routes";

const PORT = process.env.PORT || 3000;

const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: true}));
app.use(express.json());
app.use(routes);
mongoose.connect('mongodb://localhost/ApiRestCurriculo', () =>{
    console.log("conectou")
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: false}));
app.use(express.json());
app.use(routes);



app.listen(PORT, ()=>{
    console.log("Server is listening");
})