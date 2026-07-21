import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/images/google-business/lawn-care-white-colonial-sign-01.jpg`,
        `${SITE_URL}/images/google-business/shrub-trimming-boxwood-colonial-01.jpg`,
        `${SITE_URL}/images/google-business/lawn-mowing-fall-stripes-01.jpg`,
        `${SITE_URL}/images/google-business/shrub-trimming-rounded-bush-01.jpg`,
      ],
    },
  ];
}
