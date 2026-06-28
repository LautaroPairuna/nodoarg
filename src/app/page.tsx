import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import {
  MotionLink,
  Parallax,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion";

const services = [
  {
    title: "Automatizacion de procesos",
    description:
      "Digitalizamos y automatizamos tareas repetitivas para reducir tiempos, minimizar errores y escalar la operacion sin friccion.",
    size: "default",
  },
  {
    title: "Herramientas operativas",
    description:
      "Desarrollamos aplicaciones que acompanian la operacion diaria, centralizando datos, procesos y decisiones en un mismo entorno.",
    size: "wide",
  },
  {
    title: "Plataformas comerciales",
    description:
      "Creamos experiencias digitales para vender, ordenar catalogos, captar leads y acompanar todo el recorrido del cliente.",
    size: "default",
  },
  {
    title: "Experiencias digitales escalables",
    description:
      "Construimos productos que pueden crecer junto al negocio sin perder claridad visual ni solidez tecnica.",
    size: "default",
  },
  {
    title: "Sistemas administrativos",
    description:
      "Implementamos herramientas que organizan la comunicacion, el seguimiento de tareas, la facturacion y el control del funcionamiento interno.",
    size: "default",
  },
];

const navItems = ["Presentacion", "Servicios", "Casos", "Contacto"];

const caseDetails = ["Informacion del producto final", "Periodo de entrega", "Software utilizado"];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 32"
      className={`h-6 w-12 stroke-current ${className}`}
      fill="none"
      strokeWidth="1.8"
    >
      <path d="M4 16h50" />
      <path d="m40 5 15 11-15 11" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-foreground)]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Parallax
            distance={50}
            className="absolute -bottom-[12%] -top-[12%] left-[26%] right-[-10%] md:left-[32%] md:right-[-14%]"
          >
            {/* Art direction: recorte vertical en movil, horizontal en desktop */}
            <picture>
              <source media="(min-width: 768px)" srcSet="/bg-hero-desktop.webp" />
              <img
                src="/bg-hero-mobile.webp"
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                className="absolute inset-0 h-full w-full scale-x-[-1] object-cover object-center opacity-55 contrast-110 brightness-110"
              />
            </picture>
          </Parallax>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,7,0.98)_0%,rgba(5,5,7,0.94)_28%,rgba(5,5,7,0.72)_48%,rgba(5,5,7,0.26)_74%,rgba(5,5,7,0.58)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(1,123,250,0.32),transparent_32%)]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,123,250,0.12),transparent_16%,transparent)]" />
        <SiteHeader navItems={navItems} />

        <div className="mx-auto max-w-[1180px] px-4 pt-5 md:px-6">
          <div
            id="presentacion"
            className="grid min-h-[calc(100svh-4.5rem)] items-center pb-14 pt-10 md:pt-12"
          >
            <div className="relative z-10 max-w-2xl">
              <Reveal
                as="p"
                variant="fade-right"
                className="mb-6 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-primary-strong)] sm:text-sm"
              >
                Conectamos ideas con soluciones
              </Reveal>
              <Reveal
                as="h1"
                variant="fade-right"
                delay={90}
                className="max-w-[17ch] text-[clamp(2.5rem,8.5vw,4.5rem)] leading-[0.92] text-white"
              >
                <span className="font-display block">Conectamos ideas</span>
                <span className="font-display block text-[var(--color-primary)]">
                  con soluciones
                </span>
                <span className="font-display block">digitales</span>
              </Reveal>
              <Reveal
                delay={180}
                variant="fade-right"
                className="mt-7 max-w-md space-y-4 text-sm leading-6 text-white/75 md:text-[15px]"
              >
                <p>
                  Desarrollamos software y sistemas de automatizacion disenados
                  para las necesidades reales de cada negocio.
                </p>
                <p>
                  No creemos en soluciones genericas. Creamos herramientas
                  tecnologicas que ordenan procesos, potencian el crecimiento y
                  se adaptan a tu realidad.
                </p>
              </Reveal>

              <Reveal
                delay={260}
                variant="fade-up"
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <MotionLink
                  href="#contacto"
                  className="cta-link inline-flex h-11 w-full items-center justify-between gap-4 rounded-sm border border-[var(--color-primary)] bg-[var(--color-primary)] px-4 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-strong)] sm:w-auto"
                >
                  Solicitar una consulta
                  <ArrowIcon />
                </MotionLink>
                <MotionLink
                  href="#casos"
                  className="cta-link inline-flex h-11 w-full items-center justify-between gap-4 rounded-sm border border-white/35 px-4 text-sm font-medium text-white transition-colors hover:border-[var(--color-primary)] sm:w-auto"
                >
                  Ver proyectos
                  <ArrowIcon />
                </MotionLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="h-3 bg-[var(--color-primary)]" />

      <section id="servicios" className="relative overflow-hidden border-b border-white/10">
        <Parallax
          distance={70}
          className="pointer-events-none absolute -left-14 bottom-10 opacity-95 md:-left-10"
        >
          <Image
            src="/patron-circulo.svg"
            alt=""
            width={136}
            height={136}
            className="h-28 w-28 md:h-40 md:w-40"
          />
        </Parallax>
        <Parallax
          distance={-50}
          className="pointer-events-none absolute -right-10 top-3 opacity-95 md:-right-6"
        >
          <Image
            src="/patron-circulo.svg"
            alt=""
            width={144}
            height={144}
            className="h-32 w-32 md:h-44 md:w-44"
          />
        </Parallax>
        <Parallax
          distance={60}
          className="pointer-events-none absolute -right-12 top-1/2 hidden -translate-y-1/2 opacity-95 md:block"
        >
          <Image
            src="/patron-circulo.svg"
            alt=""
            width={120}
            height={120}
            className="h-24 w-24 md:h-32 md:w-32"
          />
        </Parallax>

        <div className="relative z-10 mx-auto max-w-[1180px] px-4 py-12 md:px-6 md:py-14">
          <div className="space-y-8">
            <Reveal variant="fade-up" className="space-y-4">
              <div className="inline-flex rounded-xl border border-[var(--color-border)] px-5 py-2">
                <span className="font-display text-3xl uppercase leading-none text-white">
                  servicios
                </span>
              </div>
              <p className="max-w-[420px] text-[13px] leading-[1.55] text-white/72 md:text-sm">
                En NODO desarrollamos software a medida para empresas y
                emprendedores, creando soluciones digitales adaptadas a cada
                etapa del negocio. Acompanamos el ciclo desde el primer analisis,
                entendiendo el contexto, disenando la herramienta y ajustando el
                proceso para garantizar resultados funcionales.
              </p>
            </Reveal>

            <StaggerGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
              {services.map((service, index) => {
                const isLast = index === services.length - 1;
                // En md (2 col) todas ocupan 1 col y la ultima cierra la fila a
                // ancho completo; el span "ancho" solo aplica en lg (6 col).
                const span =
                  service.size === "wide"
                    ? "md:col-span-1 lg:col-span-4"
                    : isLast
                      ? "md:col-span-2 lg:col-span-2"
                      : "md:col-span-1 lg:col-span-2";

                return (
                  <StaggerItem
                    key={service.title}
                    className={`relative min-h-[200px] rounded-[1.15rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_14%,rgba(57,160,255,0.94)_34%,rgba(1,123,250,0.96)_100%)] p-px shadow-[0_0_18px_rgba(1,123,250,0.16)] sm:min-h-[215px] ${span}`}
                  >
                  <div className="relative h-full rounded-[calc(1.15rem-1px)] bg-[linear-gradient(180deg,rgba(7,10,20,0.96),rgba(5,5,7,0.98))] px-5 pb-5 pt-7 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
                    <div className="absolute left-5 top-5 h-5 w-5 rounded-full border-2 border-white/80" />
                    <h3 className="mt-14 max-w-[17ch] text-left text-[1.3rem] font-semibold uppercase leading-[1.06] tracking-[0.01em] text-white sm:mt-16 sm:text-[1.35rem] md:text-[1.6rem]">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-[36ch] text-[12.5px] leading-[1.5] text-white/62 md:text-[13px]">
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <div className="h-3 bg-[var(--color-primary)]" />

      <section
        id="casos"
        className="relative overflow-hidden border-b border-white/10 bg-[#010101]"
      >
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover object-center backdrop-opacity-25"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/fondo-casos.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,123,250,0.08),rgba(1,1,1,0.62)_34%,rgba(1,1,1,0.86)_70%,rgba(1,1,1,0.96)_100%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1180px] px-4 py-12 md:px-6 md:py-14">
          <Reveal
            as="h2"
            variant="fade-up"
            className="font-display text-4xl uppercase leading-none text-white"
          >
            casos
          </Reveal>

          <Reveal
            as="article"
            variant="fade-up"
            delay={90}
            className="relative z-10 mt-8 grid gap-6 rounded-[1.4rem] border border-[var(--color-border)] bg-[rgba(5,5,7,0.92)] p-5 shadow-[0_0_50px_rgba(1,123,250,0.12)] sm:p-7 md:grid-cols-[1.2fr_0.8fr] md:gap-8"
          >
            <div className="space-y-5">
              <div>
                <h3 className="text-3xl leading-none text-white sm:text-4xl">
                  <span className="font-display uppercase">Carrusel</span>
                </h3>
                <p className="mt-2 text-base text-white/60">nombre cliente</p>
              </div>

              <div className="grid grid-cols-[16px_1fr] gap-4">
                <div className="mt-1 h-16 rounded-full bg-[linear-gradient(180deg,#ffffff,#017bfa)]" />
                <div className="space-y-2 text-sm leading-6 text-white/78">
                  {caseDetails.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex min-h-[200px] items-end rounded-[1rem] bg-[linear-gradient(180deg,#1889fb,#017bfa)] p-6 text-white sm:min-h-[220px] sm:p-7">
              <div className="w-full">
                <div className="mb-8 flex justify-center text-white/70">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 120 60"
                    className="h-14 w-32 stroke-current"
                    fill="none"
                    strokeWidth="1.8"
                  >
                    <path d="M4 30h84" />
                    <path d="m68 12 24 18-24 18" />
                    <path d="M26 18v24" strokeOpacity="0.5" />
                  </svg>
                </div>
                <p className="text-center text-sm leading-6 text-white/80">
                  mockup de web +<br />
                  link al producto
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="contacto"
        className="relative overflow-hidden border-b border-white/10 bg-[#010101] text-white"
      >
        <div className="absolute inset-0">
          <Parallax
            distance={40}
            className="absolute inset-0 md:bottom-[3%] md:left-[-8%] md:right-1/2 md:top-[3%]"
          >
            {/* Art direction: telefono vertical centrado en movil, composicion horizontal en desktop */}
            <picture>
              <source media="(min-width: 768px)" srcSet="/bg-contacto-desktop.webp" />
              <img
                src="/bg-contacto-mobile.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-90 contrast-115 brightness-105 md:scale-[1.12] md:object-contain md:object-[30%_80%]"
              />
            </picture>
          </Parallax>
          {/* Legibilidad vertical (todas las pantallas): oscuro arriba/abajo, claro en el medio para que se vea el telefono */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,1,1,0.9)_0%,rgba(1,1,1,0.4)_18%,rgba(1,1,1,0.04)_40%,rgba(1,1,1,0.04)_64%,rgba(1,1,1,0.55)_100%)]" />
          {/* Oscurecido lateral solo en desktop (texto a la derecha) */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(1,1,1,0)_0%,rgba(1,1,1,0)_60%,rgba(1,1,1,0.4)_78%,rgba(1,1,1,0.85)_92%,rgba(1,1,1,1)_100%)] md:block" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,123,250,0.1),transparent_18%,transparent)]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[62svh] max-w-[1180px] items-center gap-10 px-4 py-14 md:min-h-[58svh] md:grid-cols-[0.47fr_0.53fr] md:px-6 md:py-16">
          <div className="hidden md:block md:min-h-[280px]" />

          <Reveal
            variant="fade-up"
            className="flex flex-col items-center space-y-5 text-center md:items-end md:pr-0 md:text-right md:justify-self-end"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/78">
              Contacto
            </p>
            <h2 className="max-w-[16ch] text-[clamp(2rem,8vw,3.3rem)] leading-[1.02] text-white md:max-w-[14ch] md:leading-[1]">
              <span className="font-display">Hablemos de tu proximo proyecto</span>
            </h2>
            <p className="max-w-[340px] text-base leading-[1.35] text-white/82 md:text-[17px] md:leading-[1.25]">
              Cada empresa tiene desafios unicos. Nosotros desarrollamos la
              solucion adecuada para resolverlos.
            </p>
            <MotionLink
              href="mailto:hola@nodoarg.com"
              className="cta-link-left inline-flex h-11 w-full items-center justify-center gap-3 rounded-[8px] border border-white/70 px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-[var(--color-ink)] sm:w-auto sm:min-w-[310px]"
            >
              <ArrowIcon className="h-5 w-9 scale-x-[-1]" />
              Solicitar asesoramiento
            </MotionLink>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
