const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('visit', {
      
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

        review : {
            type: DataTypes.TEXT,
            
        },

        score: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        },

       
    })}