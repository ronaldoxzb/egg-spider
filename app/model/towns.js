'use strict'

module.exports = app => {
  const db = require("../database/db")
  const { STRING, INTEGER } = app.Sequelize

  const Towns = db.defineModel(app, 'towns', {
    year: {
        type: INTEGER,
        allowNull: false,
      },
    name: {
        type: STRING(32),
        allowNull: true,
      },
    code: {
      type: STRING(32),
      allowNull: true,
      primaryKey: true,
    },
    districtCode: {
      type: STRING(64),
      allowNull: true,
    },
    desc: {
      type: STRING(32),
      allowNull: true,
    },
  })
  Towns.associate = function () {
    app.model.Towns.hasMany(app.model.Villages, {
      foreignKey: "town_code",
      targetKey: "code",
      as:'children',
    });
  };
  return Towns
}