const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('clinic', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // validate: {
            //     isAlphanumeric: true
            // }
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        province: {
            type: DataTypes.STRING,
            allowNull: false
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        activeHours:{
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate : {
                isEmail: true,
                notEmpty: true,
            }
        }, 

        phone: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            // validate: {
            //     isNumeric: true,
            //     isInt: true,
            //     len: [10] // longitud: solo de 10 números, Sin 0 y sin 15 (incluye caracteristica provincia)
            // }
        },

        image: {
            type: DataTypes.STRING(1234),
            defaultValue: "https://www.segurmaniazurekin.eus/a/2020/11/segurmania_mascotas_destacada-320x240.jpg",
            validate: {
                isUrl: true
            }
        },

        emergency: {
            type: DataTypes.STRING,
            //allowNull: false,
        },

        hospitalization : {
            type: DataTypes.STRING,
           // allowNull: false,
        },

        reserveDay : {
            type: DataTypes.ENUM("Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"),
           // allowNull: false,          
        },

        reserveTime : {
            type: DataTypes.ENUM("8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"),
           // allowNull: false,          
        },

    }, {timestamps: false})
};