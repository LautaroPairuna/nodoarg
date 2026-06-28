/**
 * Configuracion central del sitio: una unica fuente de verdad para metadata,
 * datos estructurados (JSON-LD), sitemap, robots y manifest.
 */
export const site = {
  name: "NODO",
  legalName: "NodoArg",
  url: "https://nodoarg.com",
  locale: "es_AR",
  email: "hola@nodoarg.com",
  /** Pais / area donde se presta el servicio (SEO geografico). */
  areaServed: "AR",
  countryName: "Argentina",
  title: "NODO — Software a medida y automatizacion de procesos",
  shortTitle: "NODO",
  description:
    "Desarrollamos software a medida y sistemas de automatizacion para empresas y emprendedores en Argentina. Soluciones digitales que ordenan procesos, potencian el crecimiento y se adaptan a tu negocio.",
  keywords: [
    "software a medida",
    "automatizacion de procesos",
    "desarrollo de software Argentina",
    "sistemas administrativos",
    "plataformas comerciales",
    "herramientas operativas",
    "soluciones digitales",
    "transformacion digital",
  ],
  /** Perfiles sociales para el `sameAs` del JSON-LD. Completar cuando esten. */
  sameAs: [] as string[],
  /**
   * Controla si los buscadores pueden indexar el sitio.
   * Por defecto es `false`: se sirve noindex/nofollow y robots.txt bloquea
   * todo, asi se puede deployar sin aparecer en buscadores.
   * Para PUBLICAR: setear la variable de entorno NEXT_PUBLIC_SITE_INDEXABLE=true
   * (en el hosting) o cambiar esta linea por `indexable: true`.
   */
  indexable: process.env.NEXT_PUBLIC_SITE_INDEXABLE === "true",
} as const;

export type Site = typeof site;
