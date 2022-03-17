
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('reserve', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        
        ammount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate:{
                isAfter: DataTypes.NOW
            }
        }, 

        
        hourly: {
            type: DataTypes.ENUM('08','09','10','11','12','13','14','15','16'),
            allowNull: false
        },

        description : {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        city: {
            type: DataTypes.ENUM("Cordoba", "Mendoza", "Rosario"),
            allowNull: false,
        }

    }, {timestamps: false})
}