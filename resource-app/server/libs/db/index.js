import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export default function query(text, params) {
  console.log("not working after here");
  return pool.query(text, params);
}
