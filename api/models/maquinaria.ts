import { Sequelize, DataTypes } from 'sequelize';
export var maquinaria_model = (sequelize: Sequelize) => {
    var maquinaria_model = sequelize.define('t_maquinaria', {
        maq_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        maq_anio:{
            type:DataTypes.STRING(4),
            allowNull:false
        },
        maq_marca:{
            type:DataTypes.STRING(30),
            allowNull:false
        },
        maq_modelo:{
            type:DataTypes.STRING(40),
            allowNull:false
        },
        maq_lat:{
            type:DataTypes.DECIMAL(10,8),
            allowNull:false
        },
        maq_lng:{
            type:DataTypes.DECIMAL(10,8),
            allowNull:false
        },
        maq_capacidad:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        maq_img: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        maq_estado:{
            type:DataTypes.STRING(1),
            allowNull:false
        },
        maq_tipo:{
            type:DataTypes.STRING(20),
            allowNull:false
        },
    },{
            timestamps:false,
            tableName:'t_maquinaria'
    })
    return maquinaria_model;
}