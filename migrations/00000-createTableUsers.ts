import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY key generated always AS identity,
      username varchar(30) NOT NULL UNIQUE,
      password_hash varchar(30) NOT NULL
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE users`;
}
