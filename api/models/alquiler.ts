import { Sequelize, DataTypes } from 'sequelize';
export var alquiler_model = (sequelize: Sequelize) => {
    var alquiler_model = sequelize.define('t_alquiler', {
        alq_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        alq_fechin:{
            type:DataTypes.DATE
        },
        alq_fechfin:{
            type:DataTypes.DATE
        }
    },{
            timestamps:false,
            tableName:'t_alquiler'
    })
    return alquiler_model;
}