const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('pet', {
        
        id: {
            type: DataTypes.UUID,
            defaulValue: DataTypes.UUIDV4,
            unique: true,
            allowNull: false,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },

        type: { // Perro o Gato, no puede ser otra cosa
            type: DataTypes.ENUM("Dog", "Cat"),
            allowNull: false
        },

        breed: { // Raza
            type: DataTypes.STRING,
            allowNull: true
        },

        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        height: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        weight: {
            type: DataTypes.FLOAT,
            allowNull: true
        },

        image: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://www.segurmaniazurekin.eus/a/2020/11/segurmania_mascotas_destacada-320x240.jpg",
            validate: {
                isUrl: true
            }
        },

        history: {
            type : DataTypes.TEXT,
            allowNull: true,
        }, 

        status: {
            type: DataTypes.ENUM("Alive", "Deceased", "Lost"),
            allowNull: false,
        }

    }, {timestamps: false})
}