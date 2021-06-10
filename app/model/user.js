'use strict'

module.exports = app => {
  const db = require("../database/db")
  const { STRING, ENUM, DATE, NOW } = app.Sequelize

  const User = db.defineModel(app, 'user', {
    username: {
      primaryKey: true,
      type: STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        is: /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){1,50}$/i,
        isLowercase: true,
      }
    },
    password: {
      type: STRING(32),
      allowNull: true,
    },
    avatar: {
      type: STRING(256),
      allowNull: true,
    },
    sex: {
      type: ENUM,
      values: ['M', 'F'],
      allowNull: true
    }
  })

  return User
}