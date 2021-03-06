'use strict';
const {Validator} = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name:{
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    last_name:{
      allowNull: false,
      type: DataTypes.STRING(30),
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
        // isEmail(value)
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      //need to be used explicitly when querying
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      //need to be used explicitly when querying
      loginUser: {
        attributes: {},
      },
    },
  });
  User.prototype.toSafeObject = function() {
    const {id, username, email} = this;
    return {id, username, email};
  }
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString())
  };
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };
  User.login = async function ({ credential, password}){
    const {Op} = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        }
      }
    })
    if (user && user.validatePassword(password)){
      return await User.scope('currentUser').findByPk(user.id)
    }
  };
  User.signup = async function ({first_name, last_name, username, email, password}){
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      first_name, 
      last_name,
      username, 
      email, 
      hashedPassword
    })
    return await User.scope('currentUser').findByPk(user.id)
  };
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Review, {foreignKey: 'user_id'})
    User.hasMany(models.Shift, {foreignKey: 'user_id'})
  };
  return User;
};