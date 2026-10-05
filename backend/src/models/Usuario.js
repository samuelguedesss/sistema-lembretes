import { Model, DataTypes } from 'sequelize';

export default class Usuario extends Model {
    static init(sequelize) {
        return super.init({
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            nome: {type: DataTypes.STRING(120), allowNull: false},
            email: {type: DataTypes.STRING(160), allowNull: false, unique: true},
            senha: {type: DataTypes.CHAR(60), allowNull: false},
            role: {type: DataTypes.STRING(20), allowNull: false, defaultValue: 'user'},

        },
            {
                sequelize,
                tableName: 'usuarios',
            },
        )
    }

    static associate(models) {
        this.hasMany(models.Lembrete, {foreignKey: 'usuarioId', as: 'lembretes'})
    }
}

