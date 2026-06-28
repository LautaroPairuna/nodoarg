import { site } from "@/lib/site";

type ServiceInput = { title: string; description: string };

/**
 * Construye los datos estructurados schema.org (JSON-LD) del sitio como un
 * `@graph` con la Organizacion (con senales geograficas de Argentina), el
 * WebSite y el catalogo de servicios. Pensado tanto para SEO clasico como
 * para que los buscadores con IA entiendan y citen la entidad.
 */
export function buildStructuredData(services: ServiceInput[]) {
  const orgId = `${site.url}/#organization`;
  const siteId = `${site.url}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        email: site.email,
        description: site.description,
        slogan: "Conectamos ideas con soluciones digitales",
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/android-chrome-512x512.png`,
          width: 512,
          height: 512,
        },
        image: `${site.url}/og-image.png`,
        areaServed: {
          "@type": "Country",
          name: site.countryName,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: site.areaServed,
        },
        knowsAbout: [...site.keywords],
        ...(site.sameAs.length > 0 ? { sameAs: [...site.sameAs] } : {}),
        contactPoint: {
          "@type": "ContactPoint",
          email: site.email,
          contactType: "customer support",
          availableLanguage: ["Spanish"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
              provider: { "@id": orgId },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: site.url,
        name: site.name,
        description: site.description,
        inLanguage: "es-AR",
        publisher: { "@id": orgId },
      },
    ],
  };
}
