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
};
