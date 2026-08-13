import type { MetadataRoute } from "next";

const baseUrl = "https://bowdiary.okwotw.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/` },
    { url: `${baseUrl}/privacy/` },
    { url: `${baseUrl}/support/` },
  ];
}
