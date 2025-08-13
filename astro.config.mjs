// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: {
		en:'My Docs',
		'zh-cn': '我的文档',
        text:  'My Docs',
        link: "/",
      },
      description: "Documentation for my project",

      social: [
        {
          icon: "github",
          label: "GitHub1",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "example1/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "example1" },
        },
      ],
      // 为此网站设置英语为默认语言。
      defaultLocale: "en",
      locales: {
        // 英文文档在 `src/content/docs/en/` 中。
        en: {
          label: "English",
        },
        // 简体中文文档在 `src/content/docs/zh-cn/` 中。
        "zh-cn": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
    }),
  ],
});
