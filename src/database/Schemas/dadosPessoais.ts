import mongoose from "mongoose";

const dadosPessoais = new mongoose.Schema({
    nome:{
        type: String,
    },
    endereco:{
        type: String,
    },
    telefone: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
    } ,
    createdAt: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model("dadosPessoais", dadosPessoais);