import { Sequelize } from 'sequelize'; // Gunakan import karena tipe modul adalah ESM

const db = new Sequelize('db_jago_agri', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
