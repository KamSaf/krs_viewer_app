DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('stonks', 'no stonks');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "company" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"address" varchar(255) NOT NULL,
	"krs" varchar(10) NOT NULL,
	"create_date" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "report" (
	"id" serial PRIMARY KEY NOT NULL,
	"company_id" integer NOT NULL,
	"date_from" date NOT NULL,
	"date_to" date NOT NULL,
	"status" "status" NOT NULL,
	"create_date" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "report" ADD CONSTRAINT "report_company_id_company_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."company"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
