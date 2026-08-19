-- CreateTable
CREATE TABLE "Locataire" (
    "locataire_id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,

    CONSTRAINT "Locataire_pkey" PRIMARY KEY ("locataire_id")
);
