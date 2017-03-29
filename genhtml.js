var fs = require('fs'),
    ejs = require('ejs');
    path = require('path');
    data = require('./data.js');
    mm = require('marky-mark');

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function ejs2html_page(templatefile, ejsfile, outfile, options) {

  //dirname = path.dirname(ejsfile);
  //basename = path.basename(ejsfile);

  try {
    data = fs.readFileSync(templatefile, 'utf8');
    data = data.replace('{{BODY_EJS}}', ejsfile);

    var html = ejs.render(data, options);
    ensureDirectoryExistence(outfile);
    fs.writeFileSync(outfile, html);

  } catch (err) {
    console.log(err);
  }
}

// main
var info = data.data.global;
var pages = data.data.pages;
var works = mm.parseDirectorySync(__dirname + "/src/views/pages/work");

works.sort(function(a, b){
    if(a.filename > b.filename) return -1;
    if(a.filename < b.filename) return 1;
    return 0;
})

//preview or production?
var baseurl = '';
var outdir = 'preview';
if (process.argv.length == 3 && process.argv[2] === 'production') {
  baseurl = info.baseurl;
  outdir = 'docs';
}

// generate pages
for (var i=0; i < pages.length; i++) {
  templatefile = __dirname + '/' + info.pagetemplate;
  //ejsfile = __dirname + '/' + info.pagedir + '/' + pages[i].ejs;
  outfile = __dirname + '/' + outdir + '/' + pages[i].ejs;
  outfile = outfile.replace('.ejs', '.html');

  scripts = pages[i].scripts;
  for(var j=0; j < scripts.length; j++) {
    scripts[j] = scripts[j].replace("{{baseurl}}", baseurl);
  }

  options = {};
  options.meta = {};
  options.meta.title = pages[i].title;
  options.meta.description = pages[i].description;
  options.meta.keywords = pages[i].keywords;
  options.scripts = scripts;
  options.works = works;
  options.filename = info.pagetemplate;
  options.baseurl = baseurl;

  console.log('generate page: ' + __dirname + '/' + info.pagedir + '/' + pages[i].ejs);
  ejs2html_page(templatefile, pages[i].ejs, outfile, options);
}

//generate works
for(var i=0; i < works.length; i++) {
  try {
    console.log('generate work: ' + works[i].filename + works[i].filenameExtension )
    data = fs.readFileSync(info.worktemplate, 'utf8');
    data = data.replace(/{{RELATIVE_PATH}}/g, "");
    data = data.replace('{{BODY_EJS}}', works[i].content);

    var outfile = __dirname + '/' + outdir + '/work/' + works[i].filename + '.html';

    options = {};
    options.meta = {};
    options.meta.title = works[i].meta.title;
    options.meta.description = works[i].meta.description;
    options.meta.keywords = works[i].meta.keywords;
    options.filename =  info.worktemplate;
    options.baseurl = baseurl;

    var html = ejs.render(data, options);
    ensureDirectoryExistence(outfile);
    fs.writeFileSync(outfile, html);

  } catch (err) {
    console.log(err);
  }
}

console.log('genhtml - Done!');
