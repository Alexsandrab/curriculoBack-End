import mongoose from "mongoose";

const hobbies = new mongoose.Schema({
    mensagemDeSaudacao:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model("hobbies", hobbies);