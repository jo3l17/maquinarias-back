import { Sequelize, DataTypes } from 'sequelize';
export var maqUso_model = (sequelize: Sequelize) => {
    var maqUso_model = sequelize.define('t_maqUso', {
        maqUso_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        maqUso_nom:{
            type:DataTypes.STRING(45),
            allowNull:false
        }
    },{
            timestamps:false,
            tableName:'t_maqUso'
    })
    return maqUso_model;
}