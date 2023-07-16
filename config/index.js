import dotenv from 'dotenv';

dotenv.config();

export const {
  MONGODB_URI,
  JWT_SECRET,
  PORT,
  SPHERE_ENGINE_API_URL,
  SPHERE_ENGINE_API_KEY,
} = process.env;
