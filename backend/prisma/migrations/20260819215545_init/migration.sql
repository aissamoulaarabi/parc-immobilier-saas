-- CreateTable
CREATE TABLE "Bien" (
    "bien_id" SERIAL NOT NULL,
    "adresse" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "surface" DOUBLE PRECISION NOT NULL,
    "statut" TEXT NOT NULL,

    CONSTRAINT "Bien_pkey" PRIMARY KEY ("bien_id")
);
