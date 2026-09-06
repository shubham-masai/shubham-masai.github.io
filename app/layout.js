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
    "Shubham Jayswal",
    "Jayswal Shubham",
    "Shubham",
    "Jayswal",
    "Shubham Masai",
    "shubham-masai",
    "Shubham Jayswal Developer",
    "Jayswal Shubham Developer",
    "Shubham Jayswal Full Stack Developer",
    "Shubham Jayswal Portfolio",
    "Shubham Jayswal Bilimora",
    "Shubham Jayswal Bengaluru",
    "Shubham Jayswal Gujarat",
    "Full Stack Developer",
    "Software Developer",
    "MERN Stack Developer",
    "React.js Developer Bengaluru",
    "Next.js Engineer",
    "Full Stack Web Developer",
    "MERN Stack Developer Gujarat",
    "Software Developer Bengaluru",
    "Shubham Developer",
    "Masai School Developer"
  ],
  authors: [{ name: "Shubham Jayswal", url: "https://shubham-masai.github.io" }],
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
    type: "profile",
    firstName: "Shubham",
    lastName: "Jayswal",
    username: "shubham-masai",
    gender: "male",
    locale: "en_US",
    url: "https://shubham-masai.github.io/",
    title: "Shubham Jayswal | Full Stack Software Developer",
    description: "Official Portfolio of Shubham Jayswal (shubham-masai), Full Stack Software Developer specializing in MERN stack, Next.js, and RESTful APIs.",
    siteName: "Shubham Jayswal Portfolio",
    images: [
      {
        url: "https://shubham-masai.github.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shubham Jayswal - Full Stack Software Developer Portfolio",
        type: "image/jpeg",
      },
      {
        url: "https://shubham-masai.github.io/shubham-jayswal.jpg",
        width: 460,
        height: 460,
        alt: "Shubham Jayswal - Profile Photo",
        type: "image/jpeg",
      },
      {
        url: "https://shubham-masai.github.io/shubham-jayswal.webp",
        width: 460,
        height: 460,
        alt: "Shubham Jayswal - Full Stack Developer",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Jayswal | Full Stack Software Developer",
    description: "Official Portfolio of Shubham Jayswal (shubham-masai), Full Stack Software Developer.",
    images: ["https://shubham-masai.github.io/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shubham-masai.github.io/",
  },
  icons: {
    icon: "/shubham-jayswal.webp",
    shortcut: "/shubham-jayswal.webp",
    apple: "/shubham-jayswal.webp",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://shubham-masai.github.io/#website",
        "url": "https://shubham-masai.github.io/",
        "name": "Shubham Jayswal Portfolio",
        "description": "Official portfolio of Shubham Jayswal, Full Stack Software Developer",
        "publisher": {
          "@id": "https://shubham-masai.github.io/#person"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://shubham-masai.github.io/#profilepage",
        "url": "https://shubham-masai.github.io/",
        "name": "Shubham Jayswal | Full Stack Software Developer",
        "isPartOf": {
          "@id": "https://shubham-masai.github.io/#website"
        },
        "about": {
          "@id": "https://shubham-masai.github.io/#person"
        },
        "mainEntity": {
          "@id": "https://shubham-masai.github.io/#person"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "@id": "https://shubham-masai.github.io/#primaryimage",
          "url": "https://shubham-masai.github.io/shubham-jayswal.webp",
          "contentUrl": "https://shubham-masai.github.io/shubham-jayswal.webp",
          "caption": "Shubham Jayswal - Full Stack Software Developer",
          "name": "Shubham Jayswal",
          "width": 460,
          "height": 460
        }
      },
      {
        "@type": "Person",
        "@id": "https://shubham-masai.github.io/#person",
        "name": "Shubham Jayswal",
        "givenName": "Shubham",
        "familyName": "Jayswal",
        "alternateName": [
          "Shubham Jayswal",
          "Jayswal Shubham",
          "shubham-masai",
          "Shubham Masai",
          "Shubham Jayswal Developer",
          "Jayswal Shubham Developer",
          "Shubham Jayswal Full Stack Developer",
          "Shubham Jayswal Portfolio"
        ],
        "url": "https://shubham-masai.github.io/",
        "image": {
          "@type": "ImageObject",
          "@id": "https://shubham-masai.github.io/#primaryimage",
          "url": "https://shubham-masai.github.io/shubham-jayswal.webp",
          "contentUrl": "https://shubham-masai.github.io/shubham-jayswal.webp",
          "caption": "Shubham Jayswal - Full Stack Software Developer",
          "name": "Shubham Jayswal Profile Photo",
          "description": "Shubham Jayswal, Full Stack Software Developer specializing in Next.js, React.js, Node.js, and MERN stack.",
          "representativeOfPage": true,
          "width": 460,
          "height": 460
        },
        "jobTitle": "Full Stack Software Developer",
        "description": "Shubham Jayswal is a Full Stack Software Developer with 2 years of industry experience specializing in MERN stack, Next.js, Redis, and RESTful APIs.",
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Masai School",
          "url": "https://www.masaischool.com"
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
          "addressLocality": "Bilimora",
          "addressRegion": "Gujarat",
          "addressCountry": "India"
        }
      }
    ]
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

