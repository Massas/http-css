var http = require('http');
var fs   = require('fs');
var path = require('path');
var mime = {
  ".html": "text/html",
  ".css":  "text/css"
  // �ǂݎ�肽��MIME�^�C�v�͂����ɒǋL
};

var http_server = new http.createServer(function(req, res) {

  if (req.url == '/') {
    filePath = '/my-example.html';
  } else {
    filePath = req.url;
  }
  var fullPath = __dirname + filePath;

  res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || "text/plain"});
  fs.readFile(fullPath, function(err, data) {
    if (err) {
      // �G���[���̉���
    } else {
      res.end(data, 'UTF-8');
    }
  });
}).listen(3000);
console.log('Server running at http://localhost:3000/');
