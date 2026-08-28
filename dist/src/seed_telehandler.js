import { prisma } from './config/prisma.js';
async function seedTelehandler() {
    const existing = await prisma.unit.findUnique({
        where: { unitNo: 'TH001' },
    });
    if (!existing) {
        const created = await prisma.unit.create({
            data: {
                unitNo: 'TH001',
                category: 'TELEHENDLER',
                brand: 'Manitou',
                description: 'Telehandler MT-X 1840 (4 Ton 18M)',
                ownerName: 'PT Batara Dharma Persada',
                km: 1250,
                hourMeter: 340,
                status: 'ACTIVE',
            },
        });
        console.log('Created TH001 unit:', created);
    }
    else {
        console.log('TH001 already exists:', existing);
    }
    const th02 = await prisma.unit.findUnique({
        where: { unitNo: 'TH002' },
    });
    if (!th02) {
        const created2 = await prisma.unit.create({
            data: {
                unitNo: 'TH002',
                category: 'TELEHENDLER',
                brand: 'JCB',
                description: 'Telehandler 540-170 Loadall',
                ownerName: 'PT Batara Dharma Persada',
                km: 840,
                hourMeter: 215,
                status: 'ACTIVE',
            },
        });
        console.log('Created TH002 unit:', created2);
    }
}
seedTelehandler()
    .catch(console.error)
    .finally(() => process.exit(0));
//# sourceMappingURL=seed_telehandler.js.map