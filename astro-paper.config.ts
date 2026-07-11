import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://garland-culbreth.github.io/",
    title: "Garland Culbreth",
    description: "My internet home",
    author: "Garland Culbreth",
    profile: "",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "GitHub",   url: "https://github.com/garland-culbreth" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/garland-culbreth" },
    { name: "ORCiD",    url: "https://orcid.org/0000-0002-3096-4834" },
    { name: "Mail",     url: "mailto:garland.culbreth@pm.me" },
  ],
  shareLinks: [
    { name: "WhatsApp", url: "https://wa.me/?text=" },
    { name: "Facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "Bluesky",  url: "https://bsky.app/intent/compose?text=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "Mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});