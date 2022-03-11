
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('reserve', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        
        ammount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        }, 

        
        hourly: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        description : {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        city: {
            type: DataTypes.ENUM("Córdoba", "Mendoza", "Rosario"),
            allowNull: false,
        }

    }, {timestamps: false})
}