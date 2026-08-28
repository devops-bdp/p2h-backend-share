import { prisma } from "./config/prisma.js";
async function main() {
    console.log("Seeding Genset units into database...");
    const gensetUnits = [
        {
            unitNo: "GS001",
            category: "GENSET",
            brand: "Denyo DCA-80ESK (80 kVA)",
            description: "Genset Utama Workshop & Office Site",
            ownerName: "PT Batara Guru Mulia",
            km: 0,
            hourMeter: 2450,
            status: "ACTIVE",
        },
        {
            unitNo: "GS002",
            category: "GENSET",
            brand: "Denyo DCA-80ESK (80 kVA)",
            description: "Genset Mess Karyawan Area A",
            ownerName: "PT Batara Guru Mulia",
            km: 0,
            hourMeter: 3120,
            status: "ACTIVE",
        },
        {
            unitNo: "GS003",
            category: "GENSET",
            brand: "Honda EU70is (5 kVA)",
            description: "Genset Portable Pit Monitoring",
            ownerName: "PT Batara Guru Mulia",
            km: 0,
            hourMeter: 480,
            status: "ACTIVE",
        },
        {
            unitNo: "GS005",
            category: "GENSET",
            brand: "Cummins C200D5 (200 kVA)",
            description: "Genset Heavy Power Crusher & Processing",
            ownerName: "PT Batara Guru Mulia",
            km: 0,
            hourMeter: 1850,
            status: "ACTIVE",
        },
        {
            unitNo: "GS006",
            category: "GENSET",
            brand: "Perkins 2506A-E15TAG2 (500 kVA)",
            description: "Genset Utama Pembangkit Daya Site Tambang",
            ownerName: "PT Batara Guru Mulia",
            km: 0,
            hourMeter: 4200,
            status: "ACTIVE",
        },
    ];
    for (const u of gensetUnits) {
        const existing = await prisma.unit.findUnique({
            where: { unitNo: u.unitNo },
        });
        if (!existing) {
            const created = await prisma.unit.create({
                data: u,
            });
            console.log(`Created Genset Unit: ${created.unitNo} - ${created.brand}`);
        }
        else {
            console.log(`Genset Unit already exists: ${existing.unitNo}`);
        }
    }
    console.log("Seeding Genset units completed successfully.");
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed_genset.js.map