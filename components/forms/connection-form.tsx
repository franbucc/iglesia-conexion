"use client";

import { FormEvent, useState } from "react";

type Props = {
  type: "prayer" | "thanks" | "contact" | "decision";
  buttonLabel?: string;
  showMessage?: boolean;
};

export function ConnectionForm({ type, buttonLabel = "Enviar", showMessage = true }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");

    const response = await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, type }),
    });

    if (response.ok) {
      form.reset();
      setStatus("sent");
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="connection-form" onSubmit={submit}>
      <div className="field-grid">
        <label>Nombre<input name="name" required autoComplete="name" /></label>
        <label>Email<input name="email" type="email" required autoComplete="email" /></label>
      </div>
      <label>Teléfono <span>(opcional)</span><input name="phone" autoComplete="tel" /></label>
      {showMessage && <label>Mensaje<textarea name="message" required rows={6} /></label>}
      <label className="check-field">
        <input name="consent" type="checkbox" required />
        <span>Acepto que el equipo de Conexión reciba estos datos para contactarme.</span>
      </label>
      <button className="button button--blue" disabled={status === "sending"} type="submit">
        {status === "sending" ? "Enviando…" : buttonLabel}
      </button>
      {status === "sent" && <p className="form-note form-note--success">Gracias. Recibimos tu mensaje.</p>}
      {status === "error" && <p className="form-note form-note--error">No pudimos enviarlo. Probá nuevamente en unos minutos.</p>}
    </form>
  );
}
