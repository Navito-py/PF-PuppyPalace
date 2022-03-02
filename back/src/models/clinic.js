const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('clinic', {
        id:{
            type: DataTypes.UUID,
            unique: true,
            allowNull: false,
            primaryKey: true,
            defaulValue: DataTypes.UUIDV4
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },

        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        activeHours:{
            type: DataTypes.RANGE(DataTypes.DATE),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate : {
                isEmail: true,
                notEmpty: true,
            }
        }, 

        phone: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            validate: {
                isNumeric: true,
                isInt: true,
                len: [10] // longitud: solo de 10 números, Sin 0 y sin 15 (incluye caracteristica provincia)
            }
        }



    }, {timestamps: false})
};