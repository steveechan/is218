const vercel_env = process.env.NEXT_PUBLIC_VERCEL_ENV;
export const BASE_URL = vercel_env
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";