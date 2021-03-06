const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },

        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
            validate: {
                isAlphanumeric: true,
                notEmpty: true
            }
        } ,

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                notEmpty: true
            }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[a-z]+$",'i'],
                notEmpty: true
            }
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

        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [8, 20], // longitud contraseña: sólo válida entre 8 y 20 caracteres 
                notEmpty: true,
            }
        },

        phone: {
            type: DataTypes.BIGINT,
            unique: true,
            allowNull: false,
        },

        address: {
            type: DataTypes.TEXT,
            allowNull: true,
            
        },

        province: {
            type: DataTypes.STRING,
            allowNull: false
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        image: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: "https://www.segurmaniazurekin.eus/a/2020/11/segurmania_mascotas_destacada-320x240.jpg",
            validate: {
                isUrl: true
            }
        },

        refreshToken: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        banned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

    })
}