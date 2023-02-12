import { DataTypes } from "sequelize";
import dataBase from "../config/db.js";

const Activities = dataBase.define("activities",
{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    difficulty:{
        type: DataTypes.STRING,
        allowNull: false
    },
    duration:{
        type: DataTypes.STRING,
        allowNull: false
    },
    season: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {timestamps: false});

export default Activities;