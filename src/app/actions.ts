"use server";

import { supabaseAdmin } from "@/lib/supabaseServer";

export type RegisterState = { error?: string; success?: boolean };

export async function registerRacer(
  _prev: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const dietary_restrictions = (formData.get("dietary_restrictions") as string)?.trim() || null;
  const emergency_contact_name = (formData.get("emergency_contact_name") as string)?.trim() || null;
  const emergency_contact_phone = (formData.get("emergency_contact_phone") as string)?.trim() || null;

  if (!name) return { error: "Name is required." };
  if (!email) return { error: "Email is required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Please enter a valid email address." };

  const { error } = await supabaseAdmin.from("registrations").insert({
    name,
    email,
    dietary_restrictions,
    emergency_contact_name,
    emergency_contact_phone,
  });

  if (error) {
    if (error.code === "23505") return { error: "This email is already registered." };
    return { error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
