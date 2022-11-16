import mongoose from "mongoose";

const formacao = new mongoose.Schema({
    curso:{
        type: String,
    },
    anoFormacao:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model("formacao", formacao);