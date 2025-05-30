import adapter from "@sveltejs/adapter-auto";
import rehypeSlug from "rehype-slug";
import remarkUnwrapImages from "remark-unwrap-images";
import { bundledLanguages, getSingletonHighlighter } from "shiki";
import { mdsvex, escapeSvelte } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await getSingletonHighlighter({
        themes: ["github-dark"],
        langs: Object.keys(bundledLanguages),
      });
      const html = escapeSvelte(
        highlighter.codeToHtml(code, { lang, theme: "github-dark" }),
      );
      return `{@html \`${html}\` }`;
    },
  },
  remarkPlugins: [remarkUnwrapImages],
  rehypePlugins: [rehypeSlug],
};

export default {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
  },
};
