import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

/**
 * Create admin JWT
 */
export function signAdminToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}

/**
 * Read admin from cookie (Route Handlers SAFE)
 */
export async function getAdmin() {
  // cookies() is async in route handlers
  const cookieStore = await cookies();

  // Support both cookie APIs
  const token =
    typeof cookieStore.get === "function"
      ? cookieStore.get("admin_token")?.value
      : cookieStore.admin_token;

  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    return null;
  }
}
