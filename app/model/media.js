'use strict'

module.exports = app => {
  const db = require("../database/db")
  const { STRING } = app.Sequelize

  const Media = db.defineModel(app, 'media', {
    name: {
      type: STRING(128),
      allowNull: true,
    },
    url: {
      type: STRING(256),
      allowNull: true,
    },
  })

  return Media
}