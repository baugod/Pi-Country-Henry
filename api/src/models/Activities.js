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
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        },
        allowNull: false
    },
    duration:{
        type: DataTypes.STRING,
        allowNull: false
    },
    season: {
        type: DataTypes.ENUM("SPRING","SUMMER", "FALL","WINTER"),
        allowNull: false
    }
}, {timestamps: false});

export default Activities;