import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";
import Activities from "./Activities.js";

const countries= dataBase.define('countries', {
  id:{
    type: DataTypes.STRING(3),
    primaryKey: true,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  flags:{
    type: DataTypes.TEXT,
    allowNull: false,
  },
  capital:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  region:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  subregion:{
    type: DataTypes.STRING,
    allowNull: false,
  },
   population:{
    type:DataTypes.STRING,
    allowNull: false,
  }
}, {timestamps: false})

countries.belongsToMany(Activities,{
  through: "COUNTRIES_ACTIVITIES",
  timestamps: false
});
Activities.belongsToMany(countries, {
  through: "COUNTRIES_ACTIVITIES",
  timestamps: false,
});

export default countries;