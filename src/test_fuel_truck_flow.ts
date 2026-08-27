import { prisma } from "./config/prisma.js";

async function run() {
  console.log("=== 1. Checking Fuel Truck units in DB ===");
  const ftUnit = await prisma.unit.findFirst({
    where: { category: "FUEL_TRUCK" },
  });

  if (!ftUnit) {
    console.error("No FUEL_TRUCK unit found!");
    process.exit(1);
  }
  console.log(`Found Unit: ${ftUnit.unitNo} (${ftUnit.brand}) ID: ${ftUnit.id}`);

  const user = await prisma.user.findFirst();

  if (!user) {
    console.error("No test user found!");
    process.exit(1);
  }
  console.log(`Driver: ${user.firstName} ${user.lastName || ""} ID: ${user.id}`);

  console.log("=== 2. Submitting Fuel Truck P2H Inspection via API ===");
  const payload = {
    unitId: ftUnit.id,
    driverId: user.id,
    driverName: `${user.firstName} ${user.lastName || ""}`,
    driverNrp: user.nrp,
    section: user.department || "PLANT",
    workSystem: ["Tambang", "Jalur Hauling"],
    shift: "PAGI",
    km: 15420,
    hourMeter: 820.5,
    damageChecks: [
      { id: 1, category: "1. Item Check General", item: "Fungsi Steering", condition: "BAIK" },
      { id: 2, category: "1. Item Check General", item: "Kondisi Ban dan Baut", condition: "BAIK" },
      { id: 3, category: "1. Item Check General", item: "Kaca Kabin dan Spion", condition: "BAIK" },
      { id: 4, category: "1. Item Check General", item: "Lampu Kerja dan Sign", condition: "BAIK" },
      { id: 5, category: "1. Item Check General", item: "Alarm Mundur", condition: "BAIK" },
      { id: 6, category: "1. Item Check General", item: "Level Oil Lebih dari Batas Maximum", condition: "BAIK" },
      { id: 7, category: "1. Item Check General", item: "Minyak Rem Lebih dari Batas Maximum", condition: "BAIK" },
      { id: 8, category: "1. Item Check General", item: "Air Radiator Lebih dari Batas Maximum", condition: "BAIK" },
      { id: 9, category: "1. Item Check General", item: "Tuas Berfungsi dengan Baik", condition: "BAIK" },
      { id: 10, category: "1. Item Check General", item: "Rem Tangan/Kaki", condition: "BAIK" },
      { id: 11, category: "1. Item Check General", item: "Air Wipper/Washer", condition: "BAIK" },
      { id: 12, category: "1. Item Check General", item: "Klakson", condition: "BAIK" },
      { id: 13, category: "1. Item Check General", item: "Seat Belt", condition: "BAIK" },
      { id: 14, category: "1. Item Check General", item: "Kondisi dan Level Air Aki", condition: "BAIK" },
      { id: 15, category: "1. Item Check General", item: "Body Unit", condition: "BAIK" },
      { id: 16, category: "1. Item Check General", item: "Periksa Spring dan Sistem Suspensi", condition: "BAIK" },
      { id: 17, category: "2. Item Check Perlengkapan Safety", item: "Tanda Bahaya Segitiga", condition: "BAIK" },
      { id: 18, category: "2. Item Check Perlengkapan Safety", item: "APAR", condition: "BAIK" },
      { id: 19, category: "2. Item Check Perlengkapan Safety", item: "Kunci Roda dan Roda Cadangan", condition: "BAIK" },
      { id: 20, category: "2. Item Check Perlengkapan Safety", item: "Jack", condition: "BAIK" },
      { id: 21, category: "3. Persyaratan Masuk Pit", item: "Lampu Atap Kabin", condition: "BAIK" },
      { id: 22, category: "3. Persyaratan Masuk Pit", item: "Rotary Lamp", condition: "BAIK" },
      { id: 23, category: "3. Persyaratan Masuk Pit", item: "Scotlight Reflector", condition: "BAIK" },
      { id: 24, category: "3. Persyaratan Masuk Pit", item: "Identification, Vehicle No", condition: "BAIK" },
      { id: 25, category: "3. Persyaratan Masuk Pit", item: "Buggy Whip", condition: "BAIK" },
      { id: 26, category: "3. Persyaratan Masuk Pit", item: "Radio Komunikasi", condition: "BAIK" },
    ],
    driverValidation: true,
    unitStatus: "LAYAK",
    driverStatus: "LAYAK",
    supervisorNotes: "Inspeksi berkala unit Fuel Truck FT001 normal siap operasi pengisian solar site.",
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
    console.log("Response data:", JSON.stringify(data, null, 2));
    if (res.status === 201 || res.status === 200) {
      console.log("P2H No Generated:", data.data?.p2hNo);
      console.log("Unit Category:", data.data?.unit?.category);
      console.log("Damage checks count:", data.data?.damageChecks?.length);
      console.log("=== SUCCESS: Fuel Truck P2H inspection created and verified! ===");
    } else {
      console.error("Failed to create Fuel Truck inspection:", data);
    }
  } catch (err: any) {
    console.error("API error:", err.message);
  } finally {
    await prisma.$disconnect();
  }
}

run();
