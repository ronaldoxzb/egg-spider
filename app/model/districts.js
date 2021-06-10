'use strict'

module.exports = app => {
  const db = require("../database/db")
  const { STRING, INTEGER } = app.Sequelize

  const Districts = db.defineModel(app, 'districts', {
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
    cityCode: {
      type: STRING(64),
      allowNull: true,
    },
    desc: {
      type: STRING(32),
      allowNull: true,
    },
  })
  Districts.associate = function () {
    app.model.Districts.hasMany(app.model.Towns, {
      foreignKey: "district_code",
      targetKey: "code",
      as:'children',
    });
  };
  return Districts
}