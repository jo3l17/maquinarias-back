import { Sequelize, DataTypes } from 'sequelize';
export var maqUsoTipo_model = (sequelize: Sequelize) => {
    var maqUsoTipo_model = sequelize.define('t_maqUsoTipo', {
        maqUsoTipo_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    },{
            timestamps:false,
            tableName:'t_maqUsoTipo'
    })
    return maqUsoTipo_model;
}