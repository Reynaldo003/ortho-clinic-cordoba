// src/components/Testimonials.jsx
import { useEffect, useMemo, useState } from "react";
import { Quote, ChevronDown } from "lucide-react";
import RatingStars from "./RatingStars";
import { STAFF } from "../data/staff";

const LS_KEY = "doctor_ratings_v2";

// utilidades
function loadRatings() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveRatings(obj) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(obj));
  } catch {}
}
function avg(arr) {
  if (!arr || !arr.length) return 0;
  return +(arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);
}

const BASE_TESTIMONIALS = [
  {
    text: "Atención excelente, diagnóstico claro y recuperación rápida.",
    author: "María G.",
    rating: 5,
  },
  {
    text: "La terapia con el equipo de fisios me devolvió la movilidad.",
    author: "Juan R.",
    rating: 5,
  },
  {
    text: "Puntuales y profesionales. Súper recomendable.",
    author: "Elena P.",
    rating: 4,
  },
];

export default function Testimonials() {
  // ——— QUIÉNES SE PUEDEN CALIFICAR (Médicos + Fisios) ———
  const ratables = useMemo(
    () => STAFF.filter((p) => /médico|fisio/i.test(p.role || "")),
    []
  );

  const [ratings, setRatings] = useState({});
  const [selectedId, setSelectedId] = useState(ratables[0]?.id || "");
  const [stars, setStars] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setRatings(loadRatings());
  }, []);

  const handleRate = () => {
    if (!selectedId || !stars) return;
    setRatings((prev) => {
      const next = { ...prev };
      if (!next[selectedId]) next[selectedId] = { stars: [] };
      next[selectedId].stars = [...next[selectedId].stars, stars];
      saveRatings(next);
      return next;
    });
    setStars(0);
    setSent(true);
    setTimeout(() => setSent(false), 1600);
  };

  // stats globales
  const globalStats = useMemo(() => {
    const all = Object.values(ratings).flatMap((r) => r.stars || []);
    return {
      avg: avg(all),
      total: all.length,
    };
  }, [ratings]);

  return (
    <section id="testimonios" className="py-14 md:py-16 uw:py-20">
      <div className="container max-w-9xl uw:max-w-10xl safe-px">
        {/* Encabezado */}
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Experiencias de pacientes
            </h2>
            <p className="mt-2 max-w-prose text-sm text-slate-400">
              Testimonios y calificaciones que ayudan a otros pacientes a
              elegir al especialista ideal.
            </p>
          </div>
          {globalStats.total > 0 && (
            <div className="rounded-2xl bg-slate-900/60 px-4 py-2 text-xs text-slate-200 ring-1 ring-white/10">
              <p className="font-semibold">
                Promedio general:{" "}
                <span className="text-amber-300">
                  {globalStats.avg.toFixed(1)}/5
                </span>
              </p>
              <p className="text-[11px] text-slate-400">
                Basado en {globalStats.total} reseña
                {globalStats.total === 1 ? "" : "s"} registradas.
              </p>
            </div>
          )}
        </div>

        {/* Testimonios base */}
        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {BASE_TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl bg-slate-900/40 p-6 ring-1 ring-white/10 shadow-sm"
            >
              <Quote className="mb-3 size-6 text-cyan-300" />
              <figcaption className="mb-3 text-sm text-slate-300">
                “{t.text}”
              </figcaption>
              <div className="flex items-center justify-between">
                <strong className="text-sm text-white">— {t.author}</strong>
                <RatingStars value={t.rating} readOnly size="sm" />
              </div>
            </figure>
          ))}
        </div>

        {/* Calificar a un especialista — selector + estrellas */}
        <div className="mb-10 overflow-hidden rounded-2xl bg-slate-950/70 ring-1 ring-white/10">
          <div className="grid grid-cols-1 gap-6 p-5 md:grid-cols-[1fr,auto] md:items-center">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Califica la atención
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Elige al especialista que te atendió y asigna una calificación
                en estrellas. Esta información solo se usa de forma interna
                para mejorar el servicio.
              </p>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                {/* Selector */}
                <div className="relative w-full sm:w-96">
                  <select
                    value={selectedId || ""}
                    onChange={(e) => setSelectedId(e.target.value)}
                    className="w-full appearance-none rounded-lg border-0 bg-slate-900/80 py-2.5 pl-3 pr-10 text-sm text-white ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                    aria-label="Selecciona especialista"
                  >
                    {!selectedId && (
                      <option value="">Selecciona un especialista…</option>
                    )}
                    {ratables.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.role}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                </div>

                {/* Picker de estrellas */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-sm text-slate-300">
                    Tu calificación:
                  </span>
                  <RatingStars value={stars} onChange={setStars} size="lg" />
                </div>
              </div>
            </div>

            {/* Botón */}
            <div className="flex items-end md:justify-end">
              <button
                onClick={handleRate}
                disabled={!selectedId || !stars}
                className="btn btn-primary disabled:opacity-50"
              >
                Guardar calificación
              </button>
            </div>
          </div>

          {/* Confirmación */}
          {sent && (
            <div className="border-t border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-300">
              ¡Gracias! Tu calificación ha sido registrada.
            </div>
          )}
        </div>

        {/* Resumen por especialista */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h4 className="text-base font-semibold text-white">
              Resumen de calificaciones
            </h4>
            <p className="mt-1 text-sm text-slate-400">
              Promedios calculados con base en las reseñas enviadas para cada
              médico y fisioterapeuta.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ratables.map((p) => {
            const stat = ratings[p.id]?.stars || [];
            const promedio = avg(stat);
            const total = stat.length;

            return (
              <article
                key={p.id}
                className="flex items-center gap-4 rounded-2xl bg-slate-900/40 p-5 ring-1 ring-white/10"
              >
                <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-slate-800 ring-1 ring-white/10">
                  <img
                    src={p.photo || p.avatar || "/logo.png"}
                    alt={p.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {p.name}
                  </p>
                  <p className="truncate text-xs text-slate-400">
                    {p.role}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <RatingStars value={promedio} readOnly size="sm" />
                    <span className="text-xs text-slate-400">
                      {promedio ? `${promedio}/5` : "Sin calificaciones"} ·{" "}
                      {total} reseña{total === 1 ? "" : "s"}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
