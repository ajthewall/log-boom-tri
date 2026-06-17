"use client";

import { useFormState, useFormStatus } from "react-dom";
import { registerRacer, type RegisterState } from "@/app/actions";

const initialState: RegisterState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-auto bg-run hover:bg-run-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-display font-bold uppercase tracking-widest text-sm px-10 py-3 rounded-lg transition-colors"
    >
      {pending ? "Registering…" : "Register"}
    </button>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="font-display font-bold text-xs uppercase tracking-widest text-race-muted"
      >
        {label}
        {required && <span className="text-run ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-race-light placeholder:text-race-muted/50 font-body text-sm focus:outline-none focus:border-run/50 focus:ring-1 focus:ring-run/30 transition-colors"
      />
    </div>
  );
}

export default function Register() {
  const [state, formAction] = useFormState(registerRacer, initialState);

  return (
    <section id="register" className="bg-race-surface py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="h-1 w-16 bg-run rounded-full mb-10" />

        <h2 className="font-display font-bold text-5xl uppercase tracking-tight text-race-light mb-2">
          Register
        </h2>
        <p className="text-race-muted font-body text-sm mb-10">
          Claim your spot — Sunday, June 21, 2026
        </p>

        {state.success ? (
          <div className="bg-run/10 border border-run/30 rounded-xl px-6 py-8 text-center">
            <p className="font-display font-bold text-2xl uppercase tracking-tight text-race-light mb-2">
              You&apos;re in! 🎉
            </p>
            <p className="text-race-muted font-body text-sm">
              See you at Log Boom Park on June 21. Get those legs ready.
            </p>
          </div>
        ) : (
          <form action={formAction} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required placeholder="Your name" />
              <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
            </div>

            <Field
              label="Dietary restrictions"
              name="dietary_restrictions"
              placeholder="None / e.g. vegetarian, nut allergy"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Emergency contact name"
                name="emergency_contact_name"
                placeholder="Full name"
              />
              <Field
                label="Emergency contact phone"
                name="emergency_contact_phone"
                type="tel"
                placeholder="(206) 555-0100"
              />
            </div>

            {state.error && (
              <p className="text-red-400 text-sm font-body">{state.error}</p>
            )}

            <div className="pt-2">
              <SubmitButton />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
