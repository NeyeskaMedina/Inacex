-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.RegistroMatriculas (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  rut text UNIQUE,
  nombre character varying NOT NULL DEFAULT '55'::character varying,
  telefono numeric,
  curso character varying DEFAULT '55'::character varying,
  ciudad character varying DEFAULT '55'::character varying,
  direccion character varying DEFAULT '55'::character varying,
  create_date timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT RegistroMatriculas_pkey PRIMARY KEY (id)
);