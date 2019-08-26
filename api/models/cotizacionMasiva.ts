import { Sequelize, DataTypes } from 'sequelize';
export var cotizacionMasiva_model = (sequelize: Sequelize) => {
    var cotizacionMasiva_model = sequelize.define('t_cotizacionMasiva', {
        cotM_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cotM_estado:{
            type:DataTypes.STRING(1),
            allowNull:false
        },
    },{
            timestamps:false,
            tableName:'t_cotizacionMasiva'
    })
    return cotizacionMasiva_model;
}