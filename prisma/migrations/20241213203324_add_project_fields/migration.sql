-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "Url" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "statusColor" TEXT,
ADD COLUMN     "tags" TEXT DEFAULT '[]';
