import { prisma } from './config/prisma.js';

async function seedFuelTruck() {
  console.log('--- SEEDING FUEL TRUCK UNITS ---');

  const fuelTrucks = [
    {
      unitNo: 'FT001',
      category: 'FUEL_TRUCK' as const,
      brand: 'Hino Ranger FM 260 JD (Fuel Tanker 16,000L)',
      description: 'Fuel Truck Pengisian Solar Pit Unit Tambang',
      ownerName: 'PT Batara Guru Mulia',
      km: 42300,
      hourMeter: 1250,
      status: 'ACTIVE' as const,
    },
    {
      unitNo: 'FT101',
      category: 'FUEL_TRUCK' as const,
      brand: 'Mitsubishi Fuso Fighter FN 62 F (Fuel Tanker 10,000L)',
      description: 'Fuel Truck Mobile Refueling Support',
      ownerName: 'PT Batara Guru Mulia',
      km: 28900,
      hourMeter: 840,
      status: 'ACTIVE' as const,
    },
  ];

  for (const item of fuelTrucks) {
    const existing = await prisma.unit.findUnique({
      where: { unitNo: item.unitNo },
    });

    if (!existing) {
      const created = await prisma.unit.create({ data: item });
      console.log(`Created Fuel Truck: ${created.unitNo} - ${created.brand}`);
    } else {
      const updated = await prisma.unit.update({
        where: { unitNo: item.unitNo },
        data: {
          category: 'FUEL_TRUCK',
          brand: item.brand,
          description: item.description,
          ownerName: item.ownerName,
        },
      });
      console.log(`Updated Fuel Truck: ${updated.unitNo} - ${updated.brand}`);
    }
  }

  console.log('Fuel Truck units seeded successfully!');
}

seedFuelTruck()
  .catch((e) => console.error('Error seeding fuel trucks:', e))
  .finally(async () => {
    await prisma.$disconnect();
  });
