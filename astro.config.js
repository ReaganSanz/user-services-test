/*
 Modified
 Contains website header and side bar options
*/
import { defineConfig } from "astro/config";
import mermaid from 'astro-mermaid';
import starlight from "@astrojs/starlight";


// https://astro.build/config
export default defineConfig({
  // site: "https://astro.reliverse.org",

  markdown: {
      syntaxHighlight: {
        type: 'shiki',
        excludeLangs: ['mermaid'],
      },
    },
    
  integrations: [
    mermaid({
      autoTheme: true,
      enableLog: false,
    }),
    starlight({
      title: "User Services",
      logo: {
        src: "./src/assets/nsdf-logo-trans.png",
        replacesTitle: false,
        alt: "NSDF logo",
      },
      customCss: ["./src/styles/custom-style.css"],
      components: {
        ThemeProvider: './src/components/custom-theme.astro',
      },
      defaultLocale: "root",
      /*
      social: {
        github: "https://github.com/blefnk/astro",
        discord: "https://discord.gg/C4Z46fHKQ8",
      },
      */
      sidebar: [
        {
          label: "Home",
          items: [
           { autogenerate: { directory: "intro" } }, /* change to intro */
          ],
        },
        {
          label: "User Services",
          items: [
            { autogenerate: { directory: "requirements" } },
          ],
        },
      ],
    }),
  ],
});
