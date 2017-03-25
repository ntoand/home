exports.data = {
  global: {
    templatefile: "src/views/template.ejs",
    outdir: "dist",
    pagedir: "src/views/pages",
    sitename: "Toan Nguyen"
  },
  pages: [
      {
        ejs: "index.ejs",
        title: "Home",
        description: "Homepage",
        keywords: "Toan Dinh Nguyen, homepage, portfolio, 3D, graphics, visualisation",
        scripts: ["http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js", "https://www.gstatic.com/charts/loader.js",
                    "/public/js/lib/timeline.min.js", "/public/js/index.min.js"]
      },
      {
        ejs: "work/index.ejs",
        title: "Work",
        description: "Portfolio",
        keywords: "Toan Dinh Nguyen, work, portfolio",
        scripts: []
      },
      {
        ejs: "publication/index.ejs",
        title: "Publication",
        description: "Publication",
        keywords: "Toan Dinh Nguyen, research",
        scripts: ["/public/js/lib/mixitup.min.js", "/public/js/publication.min.js"]
      },
      {
        ejs: "contact/index.ejs",
        title: "Contact",
        description: "Contact Me",
        keywords: "Toan Dinh Nguyen, contact",
        scripts: []
      },
  ]
}
