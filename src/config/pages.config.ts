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
};
