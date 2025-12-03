// src/components/FAQ.jsx
export default function FAQ() {
  const faqs = [
    { q: "¿Cómo aparto una cita?", a: "Elige al profesional, selecciona servicio, fecha y hora y confirma." },
    { q: "¿Atienden urgencias?", a: "Sí. Escríbenos por WhatsApp para disponibilidad inmediata." },
    { q: "¿Métodos de pago?", a: "Efectivo, tarjeta y transferencia. Facturamos." },
    { q: "¿Política de cancelación?", a: "Sin cargo si cancelas con 12 h de anticipación." },
  ];

  return (
    <section id="faq" className="py-14 md:py-16 uw:py-20">
      {/* ⬇️ MISMO CONTENEDOR QUE EL RESTO */}
      <div className="container max-w-9xl uw:max-w-10xl safe-px">
        <div className="mb-6">
          <p className="chip">Preguntas frecuentes</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Resolvemos tus dudas</h2>
          <p className="mt-2 max-w-prose text-slate-500 dark:text-slate-300">
            Información rápida sobre citas, pagos y políticas de atención.
          </p>
        </div>

        <div className="divide-y divide-slate-200/40 dark:divide-white/10 rounded-2xl border border-slate-200/20 bg-white/70 p-5 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/60">
          {faqs.map((item, i) => (
            <details key={i} className="group py-4">
              <summary className="cursor-pointer list-none select-none font-medium text-slate-900 dark:text-white">
                <span className="mr-2 text-blue-500">●</span>
                {item.q}
              </summary>
              <div className="mt-2 pl-5 text-slate-600 dark:text-slate-300">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
