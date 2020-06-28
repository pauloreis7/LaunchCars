CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "age" int NOT NULL,
  "adress" text NOT NULL,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "adress_id" int UNIQUE,
  "tel" int UNIQUE,
  "created_at" timestamp DEFAULT (now())
);

CREATE TABLE "addresses" (
  "id" SERIAL PRIMARY KEY,
  "state" text NOT NULL,
  "city" text NOT NULL,
  "neigh" text NOT NULL,
  "street" text NOT NULL
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "model_id" int,
  "agency_id" int,
  "orders_id" int[],
  "board" int UNIQUE,
  "color" text NOT NULL,
  "price" int NOT NULL
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "agency_id" int,
  "name" text NOT NULL,
  "brand" text NOT NULL,
  "desciprion" text
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "custumer_id" int,
  "agency_id" int,
  "cars_id" int[],
  "delivery_date" timestamp DEFAULT (now())
);

ALTER TABLE "addresses" ADD FOREIGN KEY ("id") REFERENCES "agencies" ("adress_id");

ALTER TABLE "cars" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("model_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("cars_id") REFERENCES "cars" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("custumer_id") REFERENCES "customers" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agency_id") REFERENCES "agencies" ("id");