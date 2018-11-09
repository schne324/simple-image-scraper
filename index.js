const fs = require('fs');
const path = require('path');
const Batch = require('batch');
const request = require('request');
const urls = require('./data/images.json');
const writeDir = path.join(__dirname, './data/output');
const download = (url, cb) => {
  request(url, err => {
    if (err) { return; }
    const lastSlash = url.lastIndexOf('/');
    const filename = `${writeDir}/${url.substr(lastSlash + 1, url.length - 1)}`;
    request(url).pipe(fs.createWriteStream(filename)).on('close', cb);
  });
};
const batch = new Batch;
batch.concurrency(12);
urls.forEach(url => batch.push(done => download(url, done)));
batch.end(() => console.log('done!'));
