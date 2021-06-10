"use strict";

module.exports = (app) => {
  const db = require("../database/db");
  const { STRING, INTEGER } = app.Sequelize;

  const Provinces = db.defineModel(app, "provinces", {
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
    desc: {
      type: STRING(32),
      allowNull: true,
    },
  });
  Provinces.associate = function () {
    app.model.Provinces.hasMany(app.model.Cities, {
      foreignKey: "province_code",
      targetKey: "code",
      as:'children',
    });
  };
  return Provinces;
};
