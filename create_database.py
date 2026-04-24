"""
Sara's Work Management System (WMS)
PostgreSQL Database Initializer
============================
Run this script once to create and seed the database:
    python create_database.py

Requirements: Python 3.8+ and psycopg2
"""

import os
import sys
import configparser

import psycopg2
from psycopg2.extras import RealDictCursor

SCHEMA_PATH = os.path.join(os.path.dirname(__file__), "schema.sql")
CONFIG_PATH = os.path.join(os.path.dirname(__file__), "config.ini")


def _read_config():
    config = configparser.ConfigParser()
    config.read(CONFIG_PATH)
    return config


def _pg_setting(config, key, env_key, fallback):
    return os.getenv(env_key, config.get("database", key, fallback=fallback)).strip()


def _connect_postgres(config):
    database_url = os.getenv("DATABASE_URL", "").strip()
    if database_url:
        return psycopg2.connect(database_url)

    kwargs = {
        "host": _pg_setting(config, "host", "PGHOST", "127.0.0.1"),
        "port": int(_pg_setting(config, "port", "PGPORT", "5432") or "5432"),
        "dbname": _pg_setting(config, "name", "PGDATABASE", "sara_wms"),
        "user": _pg_setting(config, "user", "PGUSER", "postgres"),
        "sslmode": _pg_setting(config, "sslmode", "PGSSLMODE", "prefer"),
    }
    password = _pg_setting(config, "password", "PGPASSWORD", "")
    if password:
        kwargs["password"] = password
    return psycopg2.connect(**kwargs)


def create_database(schema_path: str = SCHEMA_PATH) -> None:
    """Create the WMS PostgreSQL database from the SQL schema file."""

    if not os.path.exists(schema_path):
        print(f"[ERROR] Schema file not found: {schema_path}")
        sys.exit(1)

    with open(schema_path, "r", encoding="utf-8") as f:
        schema_sql = f.read()

    config = _read_config()
    conn = _connect_postgres(config)

    try:
        statements = [part.strip() for part in schema_sql.split(";") if part.strip()]
        with conn.cursor() as cursor:
            for statement in statements:
                cursor.execute(statement)
        conn.commit()

        print("[OK]    PostgreSQL schema applied successfully.")

        _print_summary(conn)

    except psycopg2.Error as exc:
        print(f"[ERROR] {exc}")
        conn.rollback()
        sys.exit(1)
    finally:
        conn.close()


def _print_summary(conn) -> None:
    """Print a quick summary of what was created."""
    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute(
            """
            SELECT table_name
            FROM information_schema.tables
            WHERE table_schema = 'public'
            ORDER BY table_name
            """
        )
        tables = cursor.fetchall()

    print("\n--- Tables created ---")
    for row in tables:
        tbl = row["table_name"]
        with conn.cursor() as cursor:
            cursor.execute(f"SELECT COUNT(*) FROM {tbl}")
            count = cursor.fetchone()[0]
        print(f"  {tbl:<25} {count:>6} row(s)")

    print(f"\nTotal tables: {len(tables)}")


if __name__ == "__main__":
    print("Sara's Work Management System — Database Initializer")
    print("=" * 52)
    create_database()
    print("\nDone. You can now connect to your PostgreSQL database.")
