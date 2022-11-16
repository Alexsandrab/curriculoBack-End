import { Request, Response } from "express";
import experiencias from "../database/Schemas/experiencias";

class ExperienciasController{

    async destruir(request: Request, response: Response){
        try{
            const {id} = request.params;
        const dadosDeletados = await experiencias.findByIdAndDelete(id);

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
        await experiencias.findByIdAndUpdate(id, request.body);

        response.status(200).json ({message: "Dados Atualizados"});
        }catch(error){
            return response.status(404).json({message: "Erro ao atualizar dados"});

        }
    }

    async show(request: Request, response: Response){
        try{
            const { id } = request.params;
        const Experiencias = await experiencias.findById(id);

        if(!Experiencias){
            return response.status(404).json({message: "Não existe dados"});
        }
        return response.status(200).json(Experiencias);

        }catch (error){
        return response.status(404).json({message: "Verifique os dados preenchidos no ID"});
    }
}
    async find(request: Request, response: Response){
        try{
            const Experiencias = await experiencias.find();
            return response.json(Experiencias);
        } catch(error){
            return response.status(500).json({
                error: "Tente novamente",
                message: error
            });
        }   
    }

    async create(request: Request, response: Response){
        const {empresa, cargo} = request.body;
        try {
        const Experiencias = await experiencias.create({
            empresa,
            cargo
         });

        return response.json(Experiencias);

        } catch (error) {
           return response.status(500).send({
            error: "Falha",
            message: error
           }) 
        }
    }
}
export default new ExperienciasController;