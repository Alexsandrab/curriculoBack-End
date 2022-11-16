import { Request, Response } from "express";
import formacao from "../database/Schemas/formacao";

class FormacaoController{

    async destruir(request: Request, response: Response){
        try{
            const {id} = request.params;
        const dadosDeletados = await formacao.findByIdAndDelete(id);

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
        await formacao.findByIdAndUpdate(id, request.body);

        response.status(200).json ({message: "Dados Atualizados"});
        }catch(error){
            return response.status(404).json({message: "Erro ao atualizar dados"});

        }
    }

    async show(request: Request, response: Response){
        try{
            const { id } = request.params;
        const Formacao = await formacao.findById(id);

        if(!Formacao){
            return response.status(404).json({message: "Não existe dados"});
        }
        return response.status(200).json(Formacao);

        }catch (error){
        return response.status(404).json({message: "Verifique os dados preenchidos no ID"});
    }
}
    async find(request: Request, response: Response){
        try{
            const Formacao = await formacao.find();
            return response.json(Formacao);
        } catch(error){
            return response.status(500).json({
                error: "Tente novamente",
                message: error
            });
        }   
    }

    async create(request: Request, response: Response){
        const {curso, anoFormacao} = request.body;
        try {
        const Formacao = await formacao.create({
            curso,
            anoFormacao
         });

        return response.json(Formacao);

        } catch (error) {
           return response.status(500).send({
            error: "Falha",
            message: error
           }) 
        }
    }
}
export default new FormacaoController;