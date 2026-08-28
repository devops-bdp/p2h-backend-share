import { prisma } from './config/prisma.js';
async function seedStoringTruck() {
    const unitsToSeed = [
        {
            unitNo: 'ST-101',
            category: 'STORING_TRUCK',
            brand: 'Hino Dutro 130 HD',
            description: 'Storing Truck Service & Tyre Lifter',
            ownerName: 'PT Batara Dharma Persada',
            km: 18450,
            hourMeter: 420,
            status: 'ACTIVE',
        },
        {
            unitNo: 'ST-102',
            category: 'STORING_TRUCK',
            brand: 'Mitsubishi Fuso Canter FE 74 HD',
            description: 'Storing Truck Mobile Workshop',
            ownerName: 'PT Batara Dharma Persada',
            km: 22100,
            hourMeter: 510,
            status: 'ACTIVE',
        },
    ];
    for (const u of unitsToSeed) {
        const existing = await prisma.unit.findUnique({
            where: { unitNo: u.unitNo },
        });
        if (!existing) {
            const created = await prisma.unit.create({ data: u });
            console.log(`Created Storing Truck unit: ${created.unitNo} - ${created.brand}`);
        }
        else {
            console.log(`Storing Truck unit ${u.unitNo} already exists.`);
        }
    }
}
seedStoringTruck()
    .catch((e) => {
    console.error('Error seeding storing truck:', e);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed_storing_truck.js.map