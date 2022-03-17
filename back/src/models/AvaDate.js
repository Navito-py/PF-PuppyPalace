const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('avaDate', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allownull: false,
            unique: true
        },
        date: {
            type: DataTypes.DATE,
            allownull: false
        },
        assigned: {
            type: DataTypes.BOOLEAN,

            allownull: false
        }
    })
}