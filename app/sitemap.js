export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = "https://shubham-masai.github.io";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${baseUrl}/shubham-jayswal.webp`,
        `${baseUrl}/shubham-jayswal.jpg`,
        `${baseUrl}/og-image.jpg`,
      ],
    },
  ];
}
