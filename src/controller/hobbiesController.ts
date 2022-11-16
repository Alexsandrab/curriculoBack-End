import { Request, Response } from "express";
import hobbies from "../database/Schemas/hobbies";

class HobbiesController{

    async destruir(request: Request, response: Response){
        try{
            const {id} = request.params;
        const dadosDeletados = await hobbies.findByIdAndDelete(id);

        if(!dadosDeletados){
            return response.status(404).json({message: "Os dados não foram encontrados"});
        }
        return response.status(200).json({message: "Os dados foram deletados "})
        }catch(error){
            return response.status(404).json({message: "Erro ao apagar dados"});
        }
    }

    async update(request: Request, response: Response){
        try{
        const { id } = request.params;
        await hobbies.findByIdAndUpdate(id, request.body);

        response.status(200).json ({message: "Dados Atualizados"});
        }catch(error){
            return response.status(404).json({message: "Erro ao atualizar dados"});

        }
    }

    async show(request: Request, response: Response){
        try{
            const { id } = request.params;
        const Hobbies = await hobbies.findById(id);

        if(!Hobbies){
            return response.status(404).json({message: "Não existe dados"});
        }
        return response.status(200).json(Hobbies);

        }catch (error){
        return response.status(404).json({message: "Verifique os dados preenchidos no ID"});
    }
}
    async find(request: Request, response: Response){
        try{
            const Hobbies = await hobbies.find();
            return response.json(Hobbies);
        } catch(error){
            return response.status(500).json({
                error: "Tente novamente",
                message: error
            });
        }   
    }

    async create(request: Request, response: Response){
        const {mensagemDeSaudacao} = request.body;
        try {
        const Hobbies = await hobbies.create({
            mensagemDeSaudacao
         });

        return response.json(Hobbies);

        } catch (error) {
           return response.status(500).send({
            error: "Falha",
            message: error
           }) 
        }
    }
}
export default new HobbiesController;