'use strict'

module.exports = app => {
  const db = require("../database/db")
  const { STRING, INTEGER } = app.Sequelize

  const Villages = db.defineModel(app, 'villages', {
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
    townCode: {
      type: STRING(64),
      allowNull: true,
    },
    desc: {
      type: STRING(32),
      allowNull: true,
    },
  })

  return Villages
}