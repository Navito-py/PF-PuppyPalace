const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('rate', {
        
        ammount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
        
    }, {timestamps: false})
}