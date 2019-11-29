module.exports = {
  title: "EUCIP 4.0",
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true });
    },
    includeLevel: [2, 3, 4],
    editLinks: true,
    editLinkText: "Muuda Githubis"
  },
  themeConfig: {
    sidebarDepth: 3,
    lastUpdated: "Viimati uuendatud",
    repo: "eucip/eucip",
    repoLabel: "Paranda ja täienda Githubis",
    sidebar: "auto",
    nav: [
      { text: "Oppekava", link: "/oppekava/" },
      { text: "Oppematerjalid", link: "/oppematerjalid/" }
    ]
  }
};
