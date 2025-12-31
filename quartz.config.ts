import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Home",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "zaheen4.github.io/notes",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f5f0",       // Cream paper
          lightgray: "#e8e4d9",   // Subtle line color
          gray: "#9e9a91",        // Pencil gray
          darkgray: "#333333",    // Ink black text
          dark: "#000000",        // Pure black headers
          secondary: "#d03232",   // Red ink links
          tertiary: "#b82828",    // Darker red hover
          highlight: "rgba(208, 50, 50, 0.15)",
          textHighlight: "#e6e1cf88",
        },
        darkMode: {
          light: "#1c1c1c",       // Blackboard
          lightgray: "#333333",   // Chalk lines
          gray: "#777777",        // Faded chalk
          darkgray: "#dddddd",    // White chalk text
          dark: "#ffffff",        // Bright white headers
          secondary: "#ff6b6b",   // Pastel red links
          tertiary: "#ff8787",    // Lighter red hover
          highlight: "rgba(255, 107, 107, 0.15)",
          textHighlight: "#d0b05088",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        openLinksInNewTab: true
      }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      {
        name: "Explicit-Publish-Only",
        shouldPublish(_ctx, [_tree, vfile]) {
          // Only publish if 'publish' is explicitly set to true
          return vfile.data.frontmatter?.publish === true
        },
      },
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
