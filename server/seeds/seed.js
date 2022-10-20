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

  // Housework seed data

  await Housework.deleteMany();

  await Housework.create([
    {
      name: "Vacuum",
      description: "Vacuum the floors",
      frequency: "daily",
    },
    {
      name: "Laundry",
      description: "Wash the clothes, change the sheets",
      frequency: "weekly",
    },
    {
      name: "Bathroom",
      description: "Clean the bath tub, toilet, sink",
      frequency: "weekly",
    },
    {
      name: "Bedroom",
      description: "Clean the bedroom",
      frequency: "weekly",
    },
    {
      name: "Check Smoke Alarms",
      description:
        "Dust down & change the batteries if they need to be replaced",
      frequency: "monthly",
    },
  ]);

  console.log("Housework seeded");

  // Tools seed data

  await Tools.deleteMany();

  await Tools.create([
    {
      name: "Limescale Remover",
      description: "For bathroom and kitchen",
      picture:
        "https://digitalcontent.api.tesco.com/v2/media/ghs/c5b123b6-6ca4-4167-bf6b-d8e811c37eeb/72f9474e-45a9-4876-b9d9-9241723f7b9e_605775415.jpeg?h=540&w=540",
      price: 1.5,
    },
    {
      name: "Gloves",
      description: "Multi-purpose gloves",
      picture:
        "https://www.ikea.com/gb/en/images/products/rinnig-cleaning-gloves-green__0930415_pe790757_s5.jpg",
      price: 1.0,
    },
    {
      name: "Vacuum Cleaner",
      description: "For cleaning the floors",
      picture:
        "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/394483-01.png?$responsive$&cropPathE=desktop&fit=stretch,1&wid=960",
      price: 299.99,
    },
  ]);

  console.log("Tools seeded");

  process.exit(0);
});
