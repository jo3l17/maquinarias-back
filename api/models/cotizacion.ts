import { Sequelize, DataTypes } from 'sequelize';
export var cotizacion_model = (sequelize: Sequelize) => {
    var cotizacion_model = sequelize.define('t_cotizacion', {
        cot_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cot_fechin:{
            type:DataTypes.DATE
        },
        cot_fechfin:{
            type:DataTypes.DATE
        }
    },{
            timestamps:false,
            tableName:'t_cotizacion'
    })
    return cotizacion_model;
}