#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE TABLE IF NOT EXISTS public.zip_code
(
    id integer NOT NULL,
    zip character varying COLLATE pg_catalog."default" NOT NULL,
    country character varying COLLATE pg_catalog."default" NOT NULL,
    created timestamp without time zone NOT NULL,
    json character varying COLLATE pg_catalog."default" NOT NULL,
    PRIMARY KEY (id)
)
EOSQL