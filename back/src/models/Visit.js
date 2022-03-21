const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define ('visit', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
      
        // date: {
        //     type: DataTypes.DATEONLY,
        //     allowNull: false,
        // },

        review : {
            type: DataTypes.TEXT,
        },

        score: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        }

    }, {timestamps: false})
}