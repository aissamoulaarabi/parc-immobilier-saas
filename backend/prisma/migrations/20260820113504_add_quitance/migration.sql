-- CreateTable
CREATE TABLE "Quittance" (
    "quittance_id" SERIAL NOT NULL,
    "bail_id" INTEGER NOT NULL,
    "mois" INTEGER NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "date_generation" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Quittance_pkey" PRIMARY KEY ("quittance_id")
);

-- AddForeignKey
ALTER TABLE "Quittance" ADD CONSTRAINT "Quittance_bail_id_fkey" FOREIGN KEY ("bail_id") REFERENCES "Bail"("bail_id") ON DELETE RESTRICT ON UPDATE CASCADE;
