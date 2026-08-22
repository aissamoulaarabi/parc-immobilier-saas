-- CreateTable
CREATE TABLE "Intervention" (
    "intervention_id" SERIAL NOT NULL,
    "bien_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "dateSignalement" TIMESTAMP(3) NOT NULL,
    "statut" TEXT NOT NULL,

    CONSTRAINT "Intervention_pkey" PRIMARY KEY ("intervention_id")
);

-- AddForeignKey
ALTER TABLE "Intervention" ADD CONSTRAINT "Intervention_bien_id_fkey" FOREIGN KEY ("bien_id") REFERENCES "Bien"("bien_id") ON DELETE RESTRICT ON UPDATE CASCADE;
