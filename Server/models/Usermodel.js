import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define('user', {
    name: {
        type: DataTypes.STRING, // Menggunakan DataTypes
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    refreshToken: {
        type: DataTypes.TEXT,
    },
}, {
    freezeTableName: true
});

export default User;
