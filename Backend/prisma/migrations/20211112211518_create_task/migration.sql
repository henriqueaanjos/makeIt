-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "duration" TEXT NOT NULL,
    "list_id" TEXT NOT NULL,
    CONSTRAINT "tasks_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "lists" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
