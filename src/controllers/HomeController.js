import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "João",
      sobrenome: "Miguel",
      email: "miguel@gmail.com",
      idade: 16,
      peso: 40.0,
      altura: 1.45,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
