import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validade: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 e 255 caracteres",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validade: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "EMail já existe",
          },
          validade: {
            isEmail: {
              msg: "E-mail inválido",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validade: {
            isInt: {
              msg: "Idade precisa ser um número inteiro: EX.: 18",
            },
          },
        },
        peso: {
          type: Sequelize.DOUBLE,
          defaultValue: "",
          validade: {
            isDouble: {
              msg: "Precisa ser double",
            },
          },
        },
        altura: {
          type: Sequelize.DOUBLE,
          defaultValue: "",
          validade: {
            isDouble: {
              msg: "Precisa ser double",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
}
