-- CreateTable
CREATE TABLE "Paiement" (
    "paiement_id" SERIAL NOT NULL,
    "bail_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "montant" DOUBLE PRECISION NOT NULL,
    "statut" TEXT NOT NULL,

    CONSTRAINT "Paiement_pkey" PRIMARY KEY ("paiement_id")
);

-- AddForeignKey
ALTER TABLE "Paiement" ADD CONSTRAINT "Paiement_bail_id_fkey" FOREIGN KEY ("bail_id") REFERENCES "Bail"("bail_id") ON DELETE RESTRICT ON UPDATE CASCADE;
