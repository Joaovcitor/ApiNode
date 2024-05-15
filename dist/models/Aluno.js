"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validade: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 e 255 caracteres",
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validade: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          validade: {
            isInt: {
              msg: "Idade precisa ser um número inteiro: EX.: 18",
            },
          },
        },
        peso: {
          type: _sequelize2.default.DOUBLE,
          defaultValue: "",
          validade: {
            isDouble: {
              msg: "Precisa ser double",
            },
          },
        },
        altura: {
          type: _sequelize2.default.DOUBLE,
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
} exports.default = Aluno;
