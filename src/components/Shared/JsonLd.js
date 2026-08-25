const PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fahim Hossain",
  url: "https://www.linkedin.com/in/dev-fahim/",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_Chtw6g2JSYcFPL-TGziW4Gh_KkLxzQ7tgo3i9cPwQ&s=10",
  jobTitle: "Shopify Developer & Front-End Developer",
  description:
    "Shopify Developer & Front-End Developer specializing in custom Shopify solutions, Liquid, JavaScript, theme development, and high-performance eCommerce websites.",
  sameAs: [
    "https://github.com/sk-fahim-hossain",
    "https://www.linkedin.com/in/dev-fahim/",
    "https://wa.me/8801677428358",
  ],
  knowsAbout: [
    "Shopify",
    "Shopify Liquid",
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Webflow",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "Technical SEO",
    "eCommerce Development",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Shopify Developer",
    occupationLocation: {
      "@type": "Country",
      name: "Bangladesh",
    },
  },
};

const WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fahim Hossain | Shopify Developer Portfolio",
  url: "https://fahimhossain.dev",
  description:
    "Shopify Developer & Front-End Developer specializing in custom Shopify solutions, Liquid, JavaScript, theme development, and high-performance eCommerce websites.",
  author: {
    "@type": "Person",
    name: "Fahim Hossain",
  },
  inLanguage: "en-US",
};

const ProfilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Fahim Hossain",
    url: "https://fahimhossain.dev",
    jobTitle: "Shopify Developer & Front-End Developer",
    description:
      "Shopify Developer & Front-End Developer specializing in custom Shopify solutions, Liquid, JavaScript, theme development, and high-performance eCommerce websites.",
    knowsAbout: [
      "Shopify",
      "Shopify Liquid",
      "JavaScript",
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Webflow",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Technical SEO",
      "eCommerce Development",
    ],
  },
};

const ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Fahim Hossain - Shopify Development Services",
  url: "https://fahimhossain.dev",
  description:
    "Professional Shopify development services including custom theme development, Liquid customization, performance optimization, and technical SEO.",
  provider: {
    "@type": "Person",
    name: "Fahim Hossain",
  },
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Shopify Store Development",
          description:
            "Custom Shopify store development with sections, Liquid customization, app integrations, and performance optimization.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Development",
          description:
            "Modern websites using Next.js, React, HTML, CSS, JavaScript, and Tailwind CSS.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webflow Development",
          description:
            "Pixel-perfect Webflow websites with CMS integration, SEO optimization, and smooth animations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical SEO & Analytics",
          description:
            "Google Analytics 4, Google Tag Manager, Meta Pixel, and conversion tracking setup.",
        },
      },
    ],
  },
};

const CreativeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Shopify Custom Theme Development Portfolio",
  url: "https://fahimhossain.dev",
  description:
    "Portfolio showcasing custom Shopify themes, eCommerce solutions, and web development projects.",
  author: {
    "@type": "Person",
    name: "Fahim Hossain",
  },
  dateModified: new Date().toISOString(),
  inLanguage: "en-US",
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ProfilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CreativeWorkSchema) }}
      />
    </>
  );
}
