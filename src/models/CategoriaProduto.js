const db = require("../database");
const { DataTypes } = require('sequelize');

const Categorias = require("./Categorias");
const Produtos = require("./Produtos");

const CategoriaProduto = db.define("CategoriaProduto", {
    categoria_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Categorias,
            key: 'id'
        },
    },
    produto_id:{
        type: DataTypes.INTEGER,
        references: {
            model: Produtos,
            key: 'id'
        },
    },
    createdAt:{
        type: DataTypes.DATE,
    },
    updatedAt:{
        type: DataTypes.DATE,
    }
},
{
    tableName: "categoria_produto",
}
);

module.exports = CategoriaProduto;