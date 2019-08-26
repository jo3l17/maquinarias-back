import { Sequelize, DataTypes } from 'sequelize';
export var maqTipo_model = (sequelize: Sequelize) => {
    var maqTipo_model = sequelize.define('t_maqTipo', {
        maqTipo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        maqTipo_nom:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
    },{
            timestamps:false,
            tableName:'t_maqTipo'
    })
    return maqTipo_model;
}