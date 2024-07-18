import {
  pgTable,
  serial,
  varchar,
  integer,
  pgEnum,
  timestamp,
  date,
} from "drizzle-orm/pg-core";

const statusEnum = pgEnum("status", ["stonks", "not stonks"]);

export const CompanyTable = pgTable("company", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(), // will be separated in the future
  krs: varchar("krs", { length: 10 }).notNull(),
  createDate: timestamp("create_date").defaultNow().notNull(),
});

export const ReportTable = pgTable("report", {
  id: serial("id").primaryKey(),
  companyId: integer("company_id")
    .references(() => CompanyTable.id)
    .notNull(),
  dateFrom: date("date_from", { mode: "date" }),
  dateTo: date("date_to", { mode: "date" }),
  status: statusEnum("status").notNull(),
  createDate: timestamp("create_date").defaultNow().notNull(),
});
