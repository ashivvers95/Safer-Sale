
const seedProducts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const sequelize = require("../config/connection");


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUsers();
  console.log('\n----- Users SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');


  process.exit(0);
};

seedAll();