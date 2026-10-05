import { Model, DataTypes,} from 'sequelize';

export default class Lembrete extends Model {
    static init(sequelize) {
        return super.init({
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            usuarioId: {type: DataTypes.INTEGER, allowNull: false},
            titulo: {type: DataTypes.STRING(160), allowNull: false},
            descricao: {type: DataTypes.TEXT, allowNull: true},
            dataEvento: {type: DataTypes.DATE, allowNull: false},
            tipo: {type: DataTypes.STRING(40), allowNull: false},
        },
            {
                sequelize,
                tableName: 'lembretes'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Usuario, {foreignKey: 'usuarioId', as: 'usuario'});
        this.hasMany(models.Aviso, {foreignKey: 'lembreteId', as: 'avisos'});
    }
   
}