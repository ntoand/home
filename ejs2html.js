var fs = require('fs'),
    ejs = require('ejs');
    path = require('path');
    data = require('./data.js');

function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

function ejs2html(templatefile, ejsfile, outfile, options) {

  dirname = path.dirname(ejsfile);
  basename = path.basename(ejsfile);

  try {
    data = fs.readFileSync(templatefile, 'utf8');
    data = data.replace(/{{RELATIVE_PATH}}/g, options.relative_path);
    data = data.replace('{{BODY_EJS}}', basename);

    var html = ejs.render(data, options);
    ensureDirectoryExistence(outfile);
    fs.writeFileSync(outfile, html);

  } catch (err) {
    console.log(err);
  }
}

// main
info = data.data.global;
pages = data.data.pages;

//preview or production?
var baseurl = '';
var outdir = 'preview';
if (process.argv.length == 3 && process.argv[2] === 'production') {
  baseurl = info.baseurl;
  outdir = 'dist';
}

for (var i=0; i < pages.length; i++) {
  templatefile = __dirname + '/' + info.templatefile;
  ejsfile = __dirname + '/' + info.pagedir + '/' + pages[i].ejs;
  outfile = __dirname + '/' + outdir + '/' + pages[i].ejs;
  outfile = outfile.replace('.ejs', '.html');

  options = {};
  options.meta = {};
  options.meta.title = pages[i].title;
  options.meta.description = pages[i].description;
  options.meta.keywords = pages[i].keywords;
  options.scripts = pages[i].scripts;
  options.filename = ejsfile;
  options.baseurl = baseurl;

  var nlevels = (pages[i].ejs.match(/\//g) || []).length + 1;
  options.relative_path = '';
  for(var n=0; n < nlevels; n++)
    options.relative_path = options.relative_path + '../';

  console.log('convert ' + ejsfile);
  ejs2html(templatefile, ejsfile, outfile, options);
}

console.log('ejs2html - Done!');
