'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the phenomenal ' + chalk.red('Seedio') + ' generator!'
            ));
    },

    writing: function () {
        var done = this.async();
        this.remote('livio', 'seedio', 'master', function (err, remote) {
            remote.directory('.', this.destinationPath());
            done();
        }.bind(this));
    },

    install: function () {
        this.installDependencies();
    },

    end: function () {
        this.log(yosay('Run the server with ' + chalk.yellow('npm start')))
    }
});
