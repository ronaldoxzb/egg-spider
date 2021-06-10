"use strict";

module.exports = (app) => {
  const db = require("../database/db");
  const { STRING, INTEGER } = app.Sequelize;

  const Cities = db.defineModel(app, "cities", {
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
    provinceCode: {
      type: STRING(64),
      allowNull: true,
    },
    desc: {
      type: STRING(32),
      allowNull: true,
    },
  });
  Cities.associate = function () {
    app.model.Cities.hasMany(app.model.Districts, {
      foreignKey: "city_code",
      targetKey: "code",
      as:'children',
    });
  };
  return Cities;
};
