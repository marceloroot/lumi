-- init-postgres.sql
CREATE OR REPLACE FUNCTION create_database_if_not_exists(db_name TEXT) RETURNS VOID AS $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = db_name) THEN
        CREATE DATABASE db_name;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Chamada da função para criar o banco de dados db_lumi se ele não existir
SELECT create_database_if_not_exists('db_lumi');