module.exports = {
  title: "EUCIP: IT kutsehariduse õppematerjalid",
  markdown: {
    extendMarkdown: md => {
      md.set({ breaks: true, html: true, linkify: true });
    },
    includeLevel: [1, 2, 3, 4],
    editLinks: true,
    editLinkText: "Muuda Githubis"
  },
  plugins: [
    [
      "vuepress-plugin-container",
      {
        type: "vananenud",
        before: `<div class="vananenud"><p class="vananenud-title">Vananenud materjal</p>`,
        after: `</div>`
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "oppekava",
        before: `<div class="oppekava"><p class="oppekava-title">Õppekava teemad ja põhimõisted</p>`,
        after: `</div>`
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "probleem",
        before: `<div class="probleem"><p class="probleem-title">Probleem</p>`,
        after: `</div>`
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "kordamiskusimused",
        before: `<div class="kordamiskusimused">`,
        after: `</div>`
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: "A Juhtimine",
        items: [
          {
            text: "A1. Organisatsioon ja IKT rakendamine",
            link:
              "/oppematerjalid/a_juhtimine_01_organisatsioon_ja_ikt_rakendamine.md"
          },
          {
            text: "A2 IKT juhtimine",
            link: "/oppematerjalid/a_juhtimine_02_IKT_juhtimine.md"
          },
          {
            text: "A3 IKT väärtuse hindamine",
            link: "/oppematerjalid/a_juhtimine_03_IKT_vaartuse_hindamine.md"
          },
          {
            text: "A4 Ülemaailmne majandusvõrgustik",
            link:
              "/oppematerjalid/a_juhtimine_04_ylemaailmne_majandusvorgustik.md"
          },
          {
            text: "A5 Projektijuhtimine",
            link: "/oppematerjalid/a_juhtimine_05_projektijuhtimine.md"
          },
          {
            text: "A6 Koostöö ja kommunikatsioon",
            link: "/oppematerjalid/a_juhtimine_06_koostoo_ja_kommunikatsioon.md"
          },
          {
            text: "A7 Juriidilised ja eetilised küsimused",
            link:
              "/oppematerjalid/a_juhtimine_07_juriidilised_ja_eetilised_kysimused.md"
          }
        ]
      },
      {
        text: "B Arendus",
        items: [
          {
            text: "B1 Süsteemiarenduse protsess ja meetodid",
            link:
              "/oppematerjalid/b_arendus_01_systeemiarenduse_protsess_ja_meetodid.md"
          },
          {
            text: "B2 Andmehaldus ja andmebaasid",
            link: "/oppematerjalid/b_arendus_02_andmehaldus_ja_andmebaasid.md"
          },
          {
            text: "B3 Programmeerimine",
            link: "/oppematerjalid/b_arendus_03_programmeerimine.md"
          },
          {
            text: "B4 Kasutajaliides ja veebidisain",
            link:
              "/oppematerjalid/b_arendus_04_kasutajaliides_ja_veebidisain.md"
          }
        ]
      },
      {
        text: "C Haldus",
        items: [
          {
            text: "C1 Arvutite komponendid ja arhitektuur",
            link:
              "/oppematerjalid/c_haldus_01_arvutite_komponendid_ja_arhitektuur.md"
          },
          {
            text: "C2 Operatsioonisüsteemid",
            link: "/oppematerjalid/c_haldus_02_operatsioonisysteemid.md"
          },
          {
            text: "C3 Side ja võrgud",
            link: "/oppematerjalid/c_haldus_03_side_ja_vorgud.md"
          },
          {
            text: "C4 Võrguteenused",
            link: "/oppematerjalid/c_haldus_04_vorguteenused.md"
          },
          {
            text: "C5 Traadita ja kaasaskantavad arvutusseadmed",
            link:
              "/oppematerjalid/c_haldus_05_traadita_ja_kaasaskantavad_arvutusseadmed.md"
          },
          {
            text: "C6 Võrguhaldus",
            link: "/oppematerjalid/c_haldus_06_vorguhaldus.md"
          },
          {
            text: "C7 Teenuste tarne",
            link: "/oppematerjalid/c_haldus_07_teenuste_tarne.md"
          }
        ]
      },
      { text: "Sisuloomisjuhend", link: "/sisuloomisjuhised.html" }
    ],
    sidebarDepth: 3,
    lastUpdated: "Viimati uuendatud",
    repo: "eucip/eucip",
    repoLabel: "Täienda Githubis",
    editLinks: true,
    editLinkText: "Täienda seda lehte Github-is",
    sidebar: "auto",
    smoothScroll: false
  }
};
