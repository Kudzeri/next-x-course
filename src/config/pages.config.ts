export const PAGES = {
  PROFILE: (username: string) => ({
    href: `/u/${username}`,
    title: `Profile - ${username}`,
    description: `User profile page for ${username}`,
  }),
  HOME: {
    href: "/",
    title: "Home",
    description: "Home page of the X - Twitter clone",
  },
  EXPLORE: {
    href: "/explore",
    title: "Explore",
    description: "Explore page to discover new content and users",
  },
  PROFILE_FAKE: {
    href: "/profile-fake",
    title: "Profile - fake",
    description: "User profile page for fake",
  },
  SHOP: {
    href: "/shop",
    title: "Shop - SSR",
    description: "Shop page to browse products and make purchases",
  },
  SSG: {
    href: "/shop/ssg",
    title: "Shop - SSG",
    description: "Shop page with static site generation",
  },
  ISR: {
    href: "/shop/isr",
    title: "Shop - ISR",
    description: "Shop page with incremental static regeneration",
  },
};
