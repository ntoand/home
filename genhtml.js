"use strict";

var fs = require('fs'),
    ejs = require('ejs'),
    path = require('path'),
    data = require('./data.js'),
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
//preview or production?
var info = data.data;
var baseurl = '';
var outdir = 'preview';
if (process.argv.length == 3 && process.argv[2] === 'production') {
  baseurl = info.baseurl;
  outdir = 'docs';
}

//get data from markdown file
var mmdata = mm.parseDirectorySync(__dirname + "/" + info.pagedir);

var works = [];
for (var i = 0; i < mmdata.length; i++) {
  var item = mmdata[i];
  if(item.meta.scripts) {
    for(var j=0; j < item.meta.scripts.length; j++)
      mmdata[i].meta.scripts[j] = item.meta.scripts[j].replace("__BASEURL__", info.baseurl);
  }
  if (item.meta.type === "work") {
    var work = {};
    work.subdir = item.meta.subdir;
    work.title = item.meta.title;
    work.description = item.meta.description;
    work.categories = item.meta.categories;
    work.image = info.baseurl + "/" + item.meta.image;
    work.link = info.baseurl + '/' + work.subdir + '/' + item.filename + '.html';
    work.filename = item.filename;
    works.push(work);
  }
}

works.sort(function(a, b){
    if(a.filename > b.filename) return -1;
    if(a.filename < b.filename) return 1;
    return 0;
});

// generate pages
for (var i=0; i < mmdata.length; i++) {
  var item = mmdata[i];
  var templatefile;
  var outfile;
  var scripts = [];

  if(item.meta.type == "page") {
    templatefile = __dirname + '/' + info.pagetemplate;
    if(item.meta.scripts)
      scripts = item.meta.scripts;
  }
  else if (item.meta.type == "work") {
    templatefile = __dirname + '/' + info.worktemplate;
  }

  if(item.meta.subdir) {
    outfile = __dirname + "/" + outdir + "/" + item.meta.subdir + "/" + item.filename + ".html";
  }
  else {
    outfile = __dirname + "/" + outdir + "/" + item.filename + ".html";
  }

  var options = {};
  options.meta = {};
  options.meta.title = item.meta.title;
  options.meta.description = item.meta.description;
  options.meta.keywords = item.meta.keywords;
  options.scripts = scripts;
  options.works = works;
  if(item.meta.type == "page") {
    options.filename = info.pagetemplate;
  }
  else if (item.meta.type == "work") {
    options.filename = info.worktemplate;
  }
  options.baseurl = baseurl;

  console.log('generate ' + outfile);

  try {
    var data = fs.readFileSync(templatefile, 'utf8');

    if(item.meta.type == "page") {
      data = data.replace('{{BODY_EJS}}', item.markdown);
    }
    else if (item.meta.type == "work") {
      data = data.replace('{{BODY_EJS}}', item.content);
    }

    var html = ejs.render(data, options);
    ensureDirectoryExistence(outfile);
    fs.writeFileSync(outfile, html);

  } catch (err) {
    console.log(err);
  }
}

console.log('genhtml - Done!');
