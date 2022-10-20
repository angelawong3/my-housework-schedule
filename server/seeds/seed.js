const db = require("../config/connection");
const { User, Housework, Tools } = require("../models");

db.once("open", async () => {
  // User seed data
  await User.deleteMany();

  await User.create([
    {
      userName: "Angela",
      email: "angela@test.com",
      password: "password",
      profilePic:
        "https://media.vanityfair.com/photos/5fc0bcd47bbdf3f96726bbc2/7:3/w_3682,h_1578,c_limit/Screen%20Shot%202020-11-27%20at%2012.45.24%20AM.png",
    },
    {
      userName: "Ana",
      email: "ana@test.com",
      password: "password123",
      profilePic:
        "https://cdn.mos.cms.futurecdn.net/pabe2UQzfWm6fSxjpUeuk7-1200-80.jpg",
    },
  ]);

  console.log("Users seeded");

  process.exit(0);
});
