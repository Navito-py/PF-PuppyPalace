const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('vaccine', {
      
        name: {
            type: DataTypes.ENUM("Moquillo canino", "Hepatitis infecciosa (Adenovirus)", "Parvovirus", 
                                    "Rabia canina", "Leptospirosis", "Parainfluenza canina (Quintuple)", 
                                        "Coronavirus (Quintuple + Coronavirus)"),
            allowNull: false,
            unique: true,
        },

        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },

    })}