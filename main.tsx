/** @jsx h */

import blog, { ga, h, redirects } from "blog";

blog({
  author: "Andrew Weisbeck",
  title: "GeauxWeisbeck4.dev Blog",
  description:
    "This blog is by Andrew Weisbeck and is the official GeauxWeisbeck4.dev blog. I hope you find it mentally stimulating, witty, and wholesome. All posts are of my own opinion, and do not represent the viewpoints of anybody else.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/29e6de.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/geauxweisbeck4" },
    { title: "Twitter", url: "https://twitter.com/geauxweisbeck4" },
    { title: "Homepage", url: "https://geauxweisbeck4.dev" },
    { title: "Mastodon.social", url: "https://fosstodon.org/@GeauxWeisbeck4" },
  ],
  lang: "en",
  dateStyle: "long",
  middlewares: [
    ga("UA-221895221-2"),
  ],
});
