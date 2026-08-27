-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPERADMIN', 'ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "SupportVehicleCategory" AS ENUM ('TELEHENDLER', 'STORING_TRUCK', 'AMBULANCE', 'MOBILE_CRANE', 'CRANE_TRUCK', 'LIGHT_VECHICLE', 'FUEL_TRUCK', 'COMPRESSOR', 'COMPACTOR', 'DOZER', 'EXCAVATOR');

-- CreateEnum
CREATE TYPE "Posision" AS ENUM ('SITE_MANAGER', 'SITE_SUPERVISOR', 'SITE_SUPERINTENDENT', 'OPERATOR', 'MECHANIC', 'ELECTRICIAN', 'TYREMAN', 'DRIVER', 'ADMIN');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('PRODUCTION_AND_ENGINEERING', 'PLANT', 'LOGISTIC', 'HSE', 'HRGA');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nrp" INTEGER NOT NULL,
    "password" TEXT NOT NULL,
    "department" "Department" NOT NULL DEFAULT 'HRGA',
    "posision" "Posision" NOT NULL DEFAULT 'ADMIN',
    "phoneNumber" TEXT,
    "email" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "unitNo" TEXT NOT NULL,
    "category" "SupportVehicleCategory" NOT NULL,
    "brand" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "km" INTEGER NOT NULL,
    "hourMeter" INTEGER,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Unit_unitNo_key" ON "Unit"("unitNo");
