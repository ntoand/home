exports.data = {
  global: {
    pagetemplate: "src/views/page-template.ejs",
    worktemplate: "src/views/work-template.ejs",
    pagedir: "src/views/pages",
    sitename: "Toan Nguyen",
    baseurl: "https://ntoand.github.io/home"
  },
  pages: [
    {
      ejs: "index.ejs",
      title: "Home",
      description: "Homepage",
      keywords: "Toan Dinh Nguyen, homepage, portfolio, 3D, graphics, visualisation",
      scripts: ["https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js", "https://www.gstatic.com/charts/loader.js",
                  "{{baseurl}}/public/js/lib/timeline.min.js", "{{baseurl}}/public/js/index.min.js"]
    },
    {
      ejs: "work/index.ejs",
      title: "Work",
      description: "Portfolio",
      keywords: "Toan Dinh Nguyen, work, portfolio",
      scripts: ["{{baseurl}}/public/js/lib/mixitup.min.js", "{{baseurl}}/public/js/work.min.js"]
    },
    {
      ejs: "publication/index.ejs",
      title: "Publication",
      description: "Publication",
      keywords: "Toan Dinh Nguyen, research",
      scripts: ["{{baseurl}}/public/js/lib/mixitup.min.js", "{{baseurl}}/public/js/publication.min.js"]
    },
    {
      ejs: "contact/index.ejs",
      title: "Contact",
      description: "Contact Me",
      keywords: "Toan Dinh Nguyen, contact",
      scripts: []
    }
  ]
}
