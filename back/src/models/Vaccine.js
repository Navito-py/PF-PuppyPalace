const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('vaccine', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
      
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            //unique: true,
        },

        // date: {
        //     type: DataTypes.DATEONLY,
        //     allowNull: false,
        // },

    })}