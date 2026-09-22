import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "@/database/schema";
import "dotenv/config";

const getDatabaseUrl = () => {
  const url = process.env.DATABASE_URL;
  console.log("DATABASE_URL:", url);
  if (!url) {
    return "postgresql://placeholder@localhost/placeholder";
  }
  return url;
};

const sql = neon(getDatabaseUrl());
const db = drizzle(sql, { schema });

export { sql };

export default db;
