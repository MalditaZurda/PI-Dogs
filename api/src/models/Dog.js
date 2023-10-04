const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        min: 1
      },
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          min: 1
        }
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {timestamps: false});
};
