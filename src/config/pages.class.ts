//Эксперемент не для продакшена, а для обучения

type PageInfo = {
  href: string;
  title: string;
  description: string;
};

class PAGES {
  static PROFILE(username: string): PageInfo {
    return {
      href: `/u/${username}`,
      title: `Profile - ${username}`,
      description: `User profile page for ${username}`,
    };
  }
}

const page = PAGES.PROFILE("nursultan");
console.log(page.href); // "/u/nursultan"
