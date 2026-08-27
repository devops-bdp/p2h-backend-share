import { prisma } from "./config/prisma.js";

async function run() {
  console.log("=== 1. Checking Genset units in DB ===");
  const gsUnit = await prisma.unit.findFirst({
    where: { category: "GENSET" },
  });

  if (!gsUnit) {
    console.error("No GENSET unit found!");
    process.exit(1);
  }
  console.log(`Found Genset Unit: ${gsUnit.unitNo} (${gsUnit.brand}) ID: ${gsUnit.id}`);

  const user = await prisma.user.findFirst();
  if (!user) {
    console.error("No test user found!");
    process.exit(1);
  }
  console.log(`Inspector: ${user.firstName} ${user.lastName || ""} ID: ${user.id}`);

  console.log("=== 2. Submitting Genset P2H Inspection via Public API ===");
  const payload = {
    unitId: gsUnit.id,
    driverId: user.id,
    driverName: `${user.firstName} ${user.lastName || ""}`,
    driverNrp: user.nrp,
    section: user.department || "PLANT",
    workSystem: ["Standby", "Tambang"],
    shift: "PAGI",
    km: 0,
    hourMeter: 2455.5,
    damageChecks: [
      { id: 1, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Hours Meter Indicator", condition: "BAIK" },
      { id: 2, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Level Air Pendingin Mesin", condition: "BAIK" },
      { id: 3, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Periksa Kondisi Radiator", condition: "BAIK" },
      { id: 4, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Periksa Kebocoran Air Pendingin", condition: "BAIK" },
      { id: 5, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Level Oli Mesin", condition: "BAIK" },
      { id: 6, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Periksa Kebocoran Oli Mesin", condition: "BAIK" },
      { id: 7, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Periksa Saringan Udara", condition: "BAIK" },
      { id: 8, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Periksa Kebocoran System Udara", condition: "BAIK" },
      { id: 9, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Periksa Kondisi Battery", condition: "BAIK" },
      { id: 10, category: "1. Pemeriksaan Mesin, Pendingin & Aki", item: "Level Bahan Bakar Mesin", condition: "BAIK" },
      { id: 11, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Periksa Kebocoran Bahan Bakar", condition: "BAIK" },
      { id: 12, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Bersihkan Endapan Bahan Bakar", condition: "BAIK" },
      { id: 13, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Periksa Kipas Pendingin Radiator", condition: "BAIK" },
      { id: 14, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Periksa Ketegangan Belt Kipas", condition: "BAIK" },
      { id: 15, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Periksa Baut2 Pengikat Mesin", condition: "BAIK" },
      { id: 16, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Periksa Kabel2 Kelistrikan Mesin", condition: "BAIK" },
      { id: 17, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Kondisi Start Up Mesin", condition: "BAIK" },
      { id: 18, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Periksa Indicator Tekanan Oli Mesin", condition: "BAIK" },
      { id: 19, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Periksa Suara Mesin", condition: "BAIK" },
      { id: 20, category: "2. Sistem Bahan Bakar & Operasi Mesin", item: "Monitor Temperature Mesin", condition: "BAIK" },
      { id: 21, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Periksa Kabel2 Kelistrikan Panel", condition: "BAIK" },
      { id: 22, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Periksa Kondisi Alat Ukur & Saklar", condition: "BAIK" },
      { id: 23, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Periksa Cara Kerja Alat2 Ukur", condition: "BAIK" },
      { id: 24, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Periksa Indicator Tegangan / Arus Listrik", condition: "BAIK" },
      { id: 25, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Periksa Kabel2 Listrik Generator", condition: "BAIK" },
      { id: 26, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Periksa Baut2 Pengikat Generator", condition: "BAIK" },
      { id: 27, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Periksa Saklar & Indicator Generator", condition: "BAIK" },
      { id: 28, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Periksa Suara Generator", condition: "BAIK" },
      { id: 29, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Monitor Pengoperasian Generator", condition: "BAIK" },
      { id: 30, category: "3. Panel Kontrol, Generator & Fisik Unit", item: "Periksa Kondisi body & Frame", condition: "BAIK" },
    ],
    driverValidation: true,
    unitStatus: "LAYAK",
    driverStatus: "LAYAK",
    supervisorNotes: "Genset GS001 beroperasi stabil pada 380V 50Hz, solar tangki harian 90%, aman beroperasi.",
  };

  try {
    const res = await fetch("http://localhost:8000/api/p2h/public/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-p2h-token": "#BATARAMPH2026",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("Response status:", res.status);
    if (res.status === 201 || res.status === 200) {
      console.log("P2H No Generated:", data.data?.p2hNo);
      console.log("Unit Category:", data.data?.unit?.category);
      console.log("Damage checks count:", data.data?.damageChecks?.length);
      console.log("=== SUCCESS: Genset P2H inspection created and verified! ===");
    } else {
      console.error("API response error:", data);
    }
  } catch (err: any) {
    console.error("API error:", err.message);
  } finally {
    await prisma.$disconnect();
  }
}

run();
