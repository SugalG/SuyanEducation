const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  console.log("inside seed");
  // Site Settings (singleton)
  await prisma.siteSettings.upsert({
    where: { id: "site-settings" },
    update: {
      siteName: "Suyan Education Pvt. Ltd.",
      tagline: "Japan-Focused Education Consultancy",
      primaryPhone: "+977-XXXXXXXXXX",
      whatsappNumber: "+977-XXXXXXXXXX",
      primaryEmail: "info@suyaneducation.com",
      address: "Kathmandu, Nepal",
      googleMapLink: "https://maps.google.com",
    },
    create: {
      id: "site-settings",
      siteName: "Suyan Education Pvt. Ltd.",
      tagline: "Japan-Focused Education Consultancy",
      primaryPhone: "+977-XXXXXXXXXX",
      whatsappNumber: "+977-XXXXXXXXXX",
      primaryEmail: "info@suyaneducation.com",
      address: "Kathmandu, Nepal",
      googleMapLink: "https://maps.google.com",
    },
  });

  // Admin user
  const passwordHash = await bcrypt.hash("admin123", 10);

  await prisma.adminUser.upsert({
    where: { email: "admin@suyanedu.com" },
    update: {},
    create: {
      email: "admin@suyanedu.com",
      password: passwordHash,
    },
  });

  console.log("Seed completed: SiteSettings + AdminUser");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
