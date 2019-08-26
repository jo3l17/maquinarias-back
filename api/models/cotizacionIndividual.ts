import { Sequelize, DataTypes } from 'sequelize';
export var cotizacionIndividual_model = (sequelize: Sequelize) => {
    var cotizacionIndividual_model = sequelize.define('t_cotizacionIndividual', {
        cotI_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        cot_estado:{
            type:DataTypes.STRING(1)
        },
        cot_fechin:{
            type:DataTypes.DATE
        },
        cot_fechfin:{
            type:DataTypes.DATE
        }
    },{
            timestamps:false,
            tableName:'t_cotizacionIndividual'
    })
    return cotizacionIndividual_model;
}