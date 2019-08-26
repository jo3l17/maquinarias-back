import { Sequelize, DataTypes } from 'sequelize';
export var registroCotizacion_model = (sequelize: Sequelize) => {
    var registroCotizacion_model = sequelize.define('t_registroCotizacion', {
        reg_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reg_cot_fech:{
            type:DataTypes.DATE,
            allowNull:false
        },
    },{
            timestamps:false,
            tableName:'t_registroCotizacion'
    })
    return registroCotizacion_model;
}