const database = require('./db')
const Orcamento = database.sequelize.define('orcamento', {
    peca: {
        type: database.Sequelize.STRING
    },
    compras: {
        type: database.Sequelize.STRING
    },
    quantidade: {
        type: database.Sequelize.STRING
    },
    lucro: {
        type: database.Sequelize.STRING
    },
    venda: {
        type: database.Sequelize.STRING
    },
    maodeobra: {
        type: database.Sequelize.STRING
    },
    servicos: {
        type: database.Sequelize.STRING
    }
})
Orcamento.sync({ Force: true })
const Usuarios = database.sequelize.define('usuarios', {
<<<<<<< HEAD
        nome: {
            type: database.Sequelize.STRING
        },
        email: {
            type: database.Sequelize.STRING
        },
        cpf: {
            type: database.Sequelize.STRING
        },
        telefone: {
            type: database.Sequelize.STRING
        },
        nascimento: {
            type: database.Sequelize.DATEONLY
        },
        sexo: {
            type: database.Sequelize.STRING
        },
        endereco: {
            type: database.Sequelize.STRING
        },
        cidade: {
            type: database.Sequelize.STRING
        },
        estado: {
            type: database.Sequelize.STRING
        },
        cep: {
            type: database.Sequelize.STRING
        }
    })
    //Usuarios.sync({ Force: true })
const Login = database.sequelize.define('login', {
    usuario: {
=======
    nome: {
>>>>>>> da913a3ac1c96951089756cf855733eeea860278
        type: database.Sequelize.STRING
    },
    email: {
        type: database.Sequelize.STRING
    },
<<<<<<< HEAD
    Senha: {
        type: database.Sequelize.STRING
    },
    eAdmin: {
        type: database.Sequelize.INTEGER
    }
})

//Login.sync({ force: true })
=======
    cpf: {
        type: database.Sequelize.STRING
    },
    telefone: {
        type: database.Sequelize.STRING
    },
    nascimento: {
        type: database.Sequelize.DATEONLY
    },
    sexo: {
        type: database.Sequelize.STRING
    },
    endereco: {
        type: database.Sequelize.STRING
    },
    cidade: {
        type: database.Sequelize.STRING
    },
    estado: {
        type: database.Sequelize.STRING
    },
    cep: {
        type: database.Sequelize.STRING
    }
})
Usuarios.sync({ Force: true })
>>>>>>> da913a3ac1c96951089756cf855733eeea860278
module.exports = {
    Orcamento: Orcamento,
    Usuarios: Usuarios,
    Login: Login
}