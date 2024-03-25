// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

export const test = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  dialect: 'postgres',
  seederStorage: 'sequelize',
};
export const development = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  dialect: 'postgres',
  seederStorage: 'sequelize',
};
export const staging = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  dialect: 'postgres',
  seederStorage: 'sequelize',
};
export const production = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  dialect: 'postgres',
  seederStorage: 'sequelize',
};
