'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var SimplewebappGenerator = module.exports = function SimplewebappGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(SimplewebappGenerator, yeoman.generators.Base);

SimplewebappGenerator.prototype.app = function app() {
  this.mkdir('dist');
  this.mkdir('dist/scripts');
  this.mkdir('dist/styles');
  this.mkdir('dist/views');
  this.mkdir('dist/vendor');

  this.mkdir('src');
  this.mkdir('src/scripts');
  this.mkdir('src/scripts/controllers');
  this.mkdir('src/scripts/services');
  this.mkdir('src/scripts/directives');
  this.mkdir('src/scripts/filters');
  this.mkdir('src/styles');
  this.mkdir('src/views');

  this.copy('_package.json', 'package.json');
  this.copy('_Gruntfile.coffee', 'Gruntfile.coffee');
};

SimplewebappGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('_index.jade', 'src/index.jade');
  this.copy('_main.scss', 'src/styles/main.scss');
  this.copy('_app.coffee', 'src/scripts/app.coffee');
  this.copy('_.gitignore', '.gitignore');
  this.copy('_.bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};
