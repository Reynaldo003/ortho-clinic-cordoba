// src/pages/Home.jsx
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import { STAFF } from "../data/staff";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ServicesShowcase from "../components/ServicesShowcase";
import MapSection from "../components/MapSection";  // ⬅️ importa el mapa
// ...


export default function Home() {
  const doctors = STAFF.filter((p) => p.role.includes("Médico"));
  const physios = STAFF.filter((p) => p.role.includes("Fisioterapeuta"));

  return (
    <>
      <Hero />

      {/* Conoce al equipo */}
      <section id="equipo" className="py-14 md:py-16 uw:py-20">
        <div className="container max-w-9xl uw:max-w-10xl safe-px">
          <h2 className="font-bold tracking-tight text-fluid-4xl">Conoce al equipo</h2>
          <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">
            Dos médicos ortopedistas y dos fisioterapeutas.
          </p>

          <h3 className="mt-8 mb-3 font-semibold text-slate-200">Doctores</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {doctors.map((p) => (
              <ProfileCard key={p.id} person={p} />
            ))}
          </div>

          <h3 className="mt-10 mb-3 font-semibold text-slate-200">Fisioterapeutas</h3>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {physios.map((p) => (
              <ProfileCard key={p.id} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Servicios (anuncios) */}
      <ServicesShowcase />

      {/* Testimonios */}
      <Testimonials />

      {/* Preguntas frecuentes */}
      <FAQ />

      {/* Mapa / Ubicación (va debajo del FAQ) */}
      <MapSection />
    </>
  );
}
