import { prisma } from "./config/prisma.js";

async function main() {
  console.log("Seeding Compressor units into database...");

  const compressorUnits = [
    {
      unitNo: "CP001",
      category: "COMPRESSOR" as any,
      brand: "Airman PDS185S (Diesel)",
      description: "Kompresor Diesel Mobile Workshop & Tyre Service",
      ownerName: "PT Batara Guru Mulia",
      km: 0,
      hourMeter: 1540,
      status: "ACTIVE" as any,
    },
    {
      unitNo: "CP002",
      category: "COMPRESSOR" as any,
      brand: "Atlas Copco XAS 186 (Diesel)",
      description: "Kompresor Diesel Heavy Tyre & Storing Support",
      ownerName: "PT Batara Guru Mulia",
      km: 0,
      hourMeter: 2180,
      status: "ACTIVE" as any,
    },
    {
      unitNo: "CP003",
      category: "COMPRESSOR" as any,
      brand: "Shark SWP-310 (Listrik 10 HP)",
      description: "Kompresor Listrik Workshop Elektrikal & Washpad",
      ownerName: "PT Batara Guru Mulia",
      km: 0,
      hourMeter: 820,
      status: "ACTIVE" as any,
    },
    {
      unitNo: "CP004",
      category: "COMPRESSOR" as any,
      brand: "Hitachi OSP-22M5ARN (Listrik 22 kW)",
      description: "Kompresor Listrik Screw Central Workshop",
      ownerName: "PT Batara Guru Mulia",
      km: 0,
      hourMeter: 1120,
      status: "ACTIVE" as any,
    },
  ];

  for (const u of compressorUnits) {
    const existing = await prisma.unit.findUnique({
      where: { unitNo: u.unitNo },
    });

    if (existing) {
      const updated = await prisma.unit.update({
        where: { id: existing.id },
        data: {
          category: u.category,
          brand: u.brand,
          description: u.description,
          ownerName: u.ownerName,
          km: u.km,
          hourMeter: u.hourMeter,
          status: u.status,
        },
      });
      console.log(`Updated Compressor unit: ${updated.unitNo} (${updated.brand}) [ID: ${updated.id}]`);
    } else {
      const created = await prisma.unit.create({
        data: u,
      });
      console.log(`Created Compressor unit: ${created.unitNo} (${created.brand}) [ID: ${created.id}]`);
    }
  }

  const allCP = await prisma.unit.findMany({
    where: { category: "COMPRESSOR" as any },
  });
  console.log(`\nTotal COMPRESSOR units in DB: ${allCP.length}`);
}

main()
  .catch((e) => {
    console.error("Error seeding compressor units:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
