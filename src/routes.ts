import { Router } from "express";
import dadosPessoaisController from "./controller/dadosPessoaisController";
import experienciasController from "./controller/experienciasController";
import formacaoController from "./controller/formacaoController";
import hobbiesController from "./controller/hobbiesController";

const routes = Router();

// rotas para os dados
routes.get("/dadosPessoais", dadosPessoaisController.find);
routes.post("/dadosPessoais", dadosPessoaisController.create);
routes.get("/dadosPessoais/:id", dadosPessoaisController.show);
routes.put("/dadosPessoais/:id", dadosPessoaisController.update);
routes.delete("/dadosPessoais/:id", dadosPessoaisController.destruir);

// rotas para experiencias
routes.get("/experiencias", experienciasController.find);
routes.post("/experiencias", experienciasController.create);
routes.get("/experiencias/:id", experienciasController.show);
routes.put("/experiencias/:id", experienciasController.update);
routes.delete("/experiencias/:id", experienciasController.destruir);

// rotas para formacao
routes.get("/formacao", formacaoController.find);
routes.post("/formacao", formacaoController.create);
routes.get("/formacao/:id", formacaoController.show);
routes.put("/formacao/:id", formacaoController.update);
routes.delete("/formacao/:id", formacaoController.destruir);

// rotas para hobbies
routes.get("/hobbies", hobbiesController.find);
routes.post("/hobbies", hobbiesController.create);
routes.get("/hobbies/:id", hobbiesController.show);
routes.put("/hobbies/:id", hobbiesController.update);
routes.delete("/hobbies/:id", hobbiesController.destruir);


export default routes;
