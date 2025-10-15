import dotenv from 'dotenv';
dotenv.config();

export const MY_EMAIL = process.env.MY_EMAIL || '';
export const MY_NAME = process.env.MY_NAME || '';
export const MY_STACK = process.env.MY_STACK || '';

export const CAT_FACT_API_URL = process.env.CAT_FACT_API_URL || '';
export const CAT_FACT_TIMEOUT = process.env.CAT_FACT_TIMEOUT || '';

export const NODE_ENV = process.env.NODE_ENV || 'development';
export const PORT = process.env.PORT || 3000;
