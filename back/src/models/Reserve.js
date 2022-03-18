
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
            type: DataTypes.ENUM('08:00 - 09:00','09:00 - 10:00','10:00 - 11:00','11:00 - 12:00',
            '12:00 - 13:00','13:00 - 14:00','14:00 - 15:00','15:00 - 16:00','16:00 - 17:00'),
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