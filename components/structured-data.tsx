export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sander de Vries",
    jobTitle: "Full-Stack Developer",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sanderr.nl",
    sameAs: [
      "https://github.com/sandeeeerr",
      "https://www.linkedin.com/in/sander-de-vries-9587a017a/",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Full-Stack Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

