// src/components/ServicesShowcase.jsx
import { Stethoscope, Activity, Syringe, ChevronRight, BadgeCheck } from "lucide-react";

const ITEMS = [
  {
    key: "consultas",
    title: "Consultas médicas",
    subtitle: "Valoración y seguimiento",
    desc:
      "Atención por especialistas en ortopedia y traumatología. Evaluación integral, diagnóstico y plan de tratamiento.",
    bullets: ["Historia clínica y exploración", "Plan diagnóstico", "Ajuste de tratamiento"],
    cta: { label: "Agendar consulta", href: "#equipo" },
    image: "/public/Consultas.png",
    Icon: Stethoscope,
  },
  {
    key: "rehab",
    title: "Rehabilitación",
    subtitle: "Funcional y deportiva",
    desc:
      "Programas personalizados de fisioterapia para recuperar movilidad, fuerza y rendimiento sin dolor.",
    bullets: ["Readaptación funcional", "Neuromodulación", "Prevención de recaídas"],
    cta: { label: "Agendar fisioterapia", href: "#equipo" },
    image: "/public/Rehabilitacion.png",
    Icon: Activity,
  },
  {
    key: "procedimientos",
    title: "Procedimientos",
    subtitle: "Mínima invasión",
    desc:
      "Técnicas ambulatorias para aliviar dolor y mejorar la función con tiempos cortos de recuperación.",
    bullets: ["Infiltración guiada", "Artroscopia", "Control de dolor e inflamación"],
    cta: { label: "Solicitar información", href: "#contacto" },
    image: "/Public/procedimiento.png",
    Icon: Syringe,
  },
];

export default function ServicesShowcase() {
  return (
    // Mismo padding vertical que el resto de secciones
    <section id="servicios" className="py-14 md:py-16 uw:py-20">
      {/* Mismo contenedor que usas en "Conoce al equipo" para alinear a la izquierda */}
      <div className="container max-w-9xl uw:max-w-10xl safe-px">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Servicios</p>
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Lo que podemos hacer por tu recuperación.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Atención de especialistas, rehabilitación basada en evidencia y procedimientos de mínima
            invasión para regresar a tu actividad con seguridad.
          </p>
        </div>

        {/* Cards apiladas (banners) */}
        <div className="space-y-6">
          {ITEMS.map(({ key, title, subtitle, desc, bullets, cta, image, Icon }) => (
            <article
              key={key}
              className="
                relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-slate-900/40
                transition hover:ring-white/20
              "
            >
              <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Imagen lateral (solo en md+) */}
                <div className="relative col-span-2 hidden md:block">
                  <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="col-span-3 p-6 md:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-400/20">
                      <Icon className="size-5 text-cyan-300" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{title}</h3>
                      <p className="text-sm text-slate-300">{subtitle}</p>
                    </div>
                  </div>

                  <p className="mb-4 max-w-prose text-slate-200">{desc}</p>

                  <ul className="mb-6 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                    {bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <BadgeCheck className="mt-0.5 size-4 text-emerald-400" />
                        <span className="leading-5">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={cta.href} className="btn btn-primary inline-flex items-center">
                    {cta.label}
                    <ChevronRight className="ml-1 size-4" />
                  </a>
                </div>
              </div>

              {/* Glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-6 -bottom-4 h-5 rounded-full bg-black/30 blur-xl"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
