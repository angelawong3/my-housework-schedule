const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  // User seed data
  await User.deleteMany();

  await User.create({});

  console.log("users seeded");

  process.exit(0);
});
