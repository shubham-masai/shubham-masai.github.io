import { Plus_Jakarta_Sans, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://shubham-masai.github.io"),
  title: {
    default: "Shubham Jayswal | Full Stack Software Developer (MERN & Next.js)",
    template: "%s | Shubham Jayswal"
  },
  description: "Official Portfolio of Shubham Jayswal (shubham-masai), Full Stack Web Developer & Software Developer based in Bengaluru and Bilimora, Gujarat. Specialized in React.js, Next.js, Node.js, Express, MongoDB, Redis, and RESTful APIs.",
  keywords: [
    "Shubham",
    "Shubham Jayswal",
    "Shubham Masai",
    "shubham-masai",
    "Full Stack Developer",
    "Software Developer",
    "MERN Stack Developer",
    "React.js Developer Bengaluru",
    "Next.js Engineer",
    "Full Stack Web Developer",
    "MERN Stack Developer Gujarat",
    "Software Developer Bengaluru",
    "Shubham Developer",
    "Shubham Jayswal Portfolio",
    "Masai School Developer"
  ],
  authors: [{ name: "Shubham Jayswal", url: "https://github.com/shubham-masai" }],
  creator: "Shubham Jayswal",
  publisher: "Shubham Jayswal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubham-masai.github.io/",
    title: "Shubham Jayswal | Full Stack Software Developer",
    description: "Official Portfolio of Shubham Jayswal (shubham-masai), Full Stack Software Developer specializing in MERN stack, Next.js, and RESTful APIs.",
    siteName: "Shubham Jayswal Portfolio",
    images: [
      {
        url: "/Shubham.jpg",
        width: 1200,
        height: 630,
        alt: "Shubham Jayswal Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Jayswal | Full Stack Software Developer",
    description: "Official Portfolio of Shubham Jayswal (shubham-masai), Full Stack Software Developer.",
    images: ["/shubham.webp"],
  },
  alternates: {
    canonical: "https://shubham-masai.github.io/",
  },
  icons: {
    icon: "/Shubham.webp",
    shortcut: "/Shubham.webp",
    apple: "/Shubham.webp",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shubham Jayswal",
    "alternateName": ["Shubham", "Shubham Masai", "shubham-masai", "Shubham Jayswal Developer"],
    "url": "https://shubham-masai.github.io",
    "image": "https://shubham-masai.github.io/Shubham.jpg",
    "jobTitle": "Full Stack Software Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Moshi Moshi"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Masai School"
    },
    "sameAs": [
      "https://github.com/shubham-masai",
      "https://www.linkedin.com/in/shubhamjayswal",
      "https://shubham-masai.github.io"
    ],
    "knowsAbout": [
      "Full Stack Web Development",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "RESTful APIs",
      "JavaScript",
      "Tailwind CSS"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    }
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full bg-[#fafbfc] text-[#475569] font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}

