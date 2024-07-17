import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CompanyTable = pgTable("company", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(), // will be separated in the future
  krs: varchar("krs", { length: 10 }).notNull(),
});
