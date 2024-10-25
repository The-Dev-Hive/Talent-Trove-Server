import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const address = pgTable("address", {
  id: serial("id").primaryKey(),
  street: text("street"),
  city: text("city"),
  state: text("state"),
  postalCode: text("postal_code"),
  country: text("country"),
  latitude: text("latitude"),
  longitude: text("longitude"),
});
