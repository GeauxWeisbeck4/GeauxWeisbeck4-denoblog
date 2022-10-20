/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "GeauxWeisbeck4.dev Blog",
  description: "Welcome to my new blog site for GeauxWeisbeck4.dev!",
  // header: <header>GeauxWeisbeck4.dev Blog Site</header>,
  // section: <section>Stay up to date with my latest happenings, rants, rambles and cool web dev stuff. Made with Deno Blog.</section>,
  // footer: <footer>Created by GeauxWeisbeck4 2022. All rights reserved.</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/18a559.svg",
  avatarClass: "rounded-full",
  author: "Andrew Weisbeck",

   middlewares: [

     If you want to set up Google Analytics, paste your GA key here.
     ga("UA-221895221-2"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
