-- CreateTable
CREATE TABLE "planets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "mass" DECIMAL NOT NULL,
    "registered_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
