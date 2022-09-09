import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgres://gsol:gsol@localhost:5432/geo_database_test",
  {
    logging: false,
    benchmark: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  }
);
export default sequelize;
