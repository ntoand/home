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
    },
    /*
    {
      ejs: "work/2005-nwfc/index.ejs",
      title: "NWFC 3D game engine and Dead Rising game",
      description: "Design and implementation of 3D game engine",
      keywords: "visualisation, graphics, 3D game engine, game",
      scripts: []
    },
    {
      ejs: "work/2007-dvc/index.ejs",
      title: "Distributed video coding (DVC)",
      description: "Design and implementation of DVC using C/C++",
      keywords: "video coding, distributed video coding",
      scripts: []
    },
    {
      ejs: "work/2007-transcoder/index.ejs",
      title: "MPEG-4 to H.264 transcoder",
      description: "Video transcoding from MPEG-4 to H.264",
      keywords: "research, video coding",
      scripts: []
    },
    {
      ejs: "work/2015-vsviewer/index.ejs",
      title: "Virtual slice viewer",
      description: "Virtual slice viewer for the CAVE2",
      keywords: "visualisation, graphics, virtual slice, viewer",
      scripts: []
    },
    */
  ],
  /*
  works: [
    {
      title: "vsviewer",
      description: "virtual slice viewer for desktop/CAVE",
      categories: "visualisation",
      img: "public/imgs/work/2015-vsviewer/01.jpg",
      link: "work/2015-vsviewer"
    },
    {
      title: "video transcoder",
      description: "MPEG-4 to H.264 fast transcoder",
      categories: "research",
      img: "public/imgs/work/2007-transcoder/01.jpg",
      link: "work/2007-transcoder"
    },
    {
      title: "distributed video coding (DVC)",
      description: "C/C++ implementation",
      categories: "research",
      img: "public/imgs/work/2007-dvc/01.jpg",
      link: "work/2007-dvc"
    },
    {
      title: "NWFC game engine",
      description: "NWFC 3D game engine and dead rising game",
      categories: "visualisation",
      img: "public/imgs/work/2005-nwfc/01.jpg",
      link: "work/2005-nwfc"
    },
  ],
  */
  works: [
    "work/2005-nwfc.md",
    "work/2007-dvc.md"
  ]
}
