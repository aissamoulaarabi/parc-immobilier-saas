/*
  Warnings:

  - Added the required column `utilisateur_id` to the `Bien` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bien" ADD COLUMN     "utilisateur_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Utilisateur" (
    "utilisateur_id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasseHash" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("utilisateur_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- AddForeignKey
ALTER TABLE "Bien" ADD CONSTRAINT "Bien_utilisateur_id_fkey" FOREIGN KEY ("utilisateur_id") REFERENCES "Utilisateur"("utilisateur_id") ON DELETE RESTRICT ON UPDATE CASCADE;
