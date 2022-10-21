/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Geaux Blog",
  description: "The Denosaur is named Judah - just like my favorite stuffed dinosaur toy when I was young. Everything else on this page is my own writing. I hope you find it mentally stimulating, witty, and wholesome. All posts are of my own opinion, and do not represent the viewpoints of anybody else.",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/29e6de.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/geauxweisbeck4" },
    { title: "Twitter", url: "https://twitter.com/geauxweisbeck4" },
    { title: "Homepage", url: "https://geauxweisbeck4.dev" },
  ],
  author: "Andrew Weisbeck",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
})
