import { Request, Response } from "express";
import dadosPessoais from "../database/Schemas/dadosPessoais";



class DadosPessoaisController{

    async destruir(request: Request, response: Response){
        try{
            const {id} = request.params;
        const dadosDeletados = await dadosPessoais.findByIdAndDelete(id);

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
        await dadosPessoais.findByIdAndUpdate(id, request.body);

        response.status(200).json ({message: "Dados Atualizados"});
        }catch(error){
            return response.status(404).json({message: "Erro ao atualizar dados"});

        }
    }

    async show(request: Request, response: Response){
        try{
            const { id } = request.params;
        const dadospessoais = await dadosPessoais.findById(id);

        if(!dadosPessoais){
            return response.status(404).json({message: "Não existe dados"});
        }
        return response.status(200).json(dadospessoais);

        }catch (error){
        return response.status(404).json({message: "Verifique os dados preenchidos no ID"});
    }
}
    async find(request: Request, response: Response){
        try{
            const dadospessoais = await dadosPessoais.find();
            return response.json(dadospessoais);
        } catch(error){
            return response.status(500).json({
                error: "Tente novamente",
                message: error
            });
        }   
    }

    async create(request: Request, response: Response){
        const {nome, endereco, telefone, email} = request.body;
        try {
            const EmailExistente = await dadosPessoais.findOne({ email });

            if(EmailExistente){
                return response.status(400).json({
                    error: "Atenção!",
                    message: "Email já cadastrado no banco de dados"
                });
            }

         const dadospessoais = await dadosPessoais.create({
            nome,
            endereco,
            telefone,
            email
         });

        return response.json(dadospessoais);

        } catch (error) {
           return response.status(500).send({
            error: "Registration failed",
            message: error
           }) 
        }
    }
}
export default new DadosPessoaisController;