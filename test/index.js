
var rework = require('rework');
var mixin = require('rework-plugin-mixin');
var mixins = require('..');
var fs = require('fs');
var path = require('path');
var read = fs.readFileSync;
var readdir = fs.readdirSync;

describe('should support', function(){
  readdir('test/cases').forEach(function(file){
    if (~file.indexOf('.out')) return;
    var base = path.basename(file, '.css');
    var input = read('test/cases/' + file, 'utf8');
    var output = read('test/cases/' + base + '.out.css', 'utf8');

    it(base, function(){
      var css = rework(input)
        .use(mixin(mixins))
        .toString();

      css.trim().should.equal(output.trim());
    })
  });
})
