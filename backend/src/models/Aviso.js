import { Model, DataTypes } from 'sequelize';

export default class Aviso extends Model {
    static init(sequelize) {
        return super.init({
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            lembreteId: {type: DataTypes.INTEGER, allowNull: false},
            diasAntes: {type: DataTypes.INTEGER, allowNull: false},
            dispararEm: {type: DataTypes.DATE, allowNull: false},
            canal: {type: DataTypes.STRING(20), allowNull: false, defaultValue: 'email'},
            status: {type: DataTypes.ENUM('pendente', 'enviado', 'falhou'), allowNull: false, defaultValue: 'pendente'},
        },
            {
                sequelize,
                tableName: 'avisos'
            }
    )
    }
}