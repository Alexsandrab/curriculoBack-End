import mongoose from "mongoose";

const experiencias = new mongoose.Schema({
    empresa:{
        type: String,
    },
    cargo:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model("experiencias", experiencias);