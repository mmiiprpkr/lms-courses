const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
   try {
      await db.category.createMany({
         data: [
            {name: "Computer Science"},
            {name: "Music"},
            {name: "Photography"},
            {name: "Accounting"},
            {name: "Engineering"},
            {name: "Filming"}
         ]
      });

      console.log("Success create category");
   } catch (error) {
      console.log("Error seeding the database categories", error);
      await db.$disconnect();
   }
}

main();