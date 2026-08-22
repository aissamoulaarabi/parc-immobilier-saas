-- CreateTable
CREATE TABLE "Bail" (
    "bail_id" SERIAL NOT NULL,
    "bien_id" INTEGER NOT NULL,
    "locataire_id" INTEGER NOT NULL,
    "dateDebut" TIMESTAMP(3) NOT NULL,
    "dateFin" TIMESTAMP(3) NOT NULL,
    "montantLoyer" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Bail_pkey" PRIMARY KEY ("bail_id")
);

-- AddForeignKey
ALTER TABLE "Bail" ADD CONSTRAINT "Bail_bien_id_fkey" FOREIGN KEY ("bien_id") REFERENCES "Bien"("bien_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bail" ADD CONSTRAINT "Bail_locataire_id_fkey" FOREIGN KEY ("locataire_id") REFERENCES "Locataire"("locataire_id") ON DELETE RESTRICT ON UPDATE CASCADE;
