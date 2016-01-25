'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-seedio:app', function () {
    before(function (done) {
        console.log(__dirname);
        helpers.run(path.join(__dirname, '../generators/app'))
            .on('end', done);
    });

    it('creates files from Seedio repository', function (done) {
        assert.file([
            '.bowerrc',
            '.gitignore',
            'README.md',
            'bower.json',
            'index.js',
            'package.json',
            'config/index.js',
            'config/local.js',
            'config/test.js',
            'docs/README.md',
            'test/index.js',
            'test/login.js',
            'app/authentication/accessToken_1data.js',
            'app/authentication/accessToken_model.js',
            'app/authentication/authorizationCode_model.js',
            'app/general/general_controller.js',
            'app/users/user_api.js',
            'app/users/user_authentication1.js',
            'app/users/user_client.js',
            'app/users/user_fixture.js',
            'app/users/user_model.js',
            'app/users/user_test.js',
            'locales/dev/translation.json',
            'libs/database/index.js',
            'libs/error/index.js',
            'libs/log/index.js',
            'libs/oauth2/controller.js',
            'libs/oauth2/index.js',
            'libs/response/index.js',
            'client/.gitignore',
            'client/public/assets/.gitkeep',
            'client/public/css/.gitkeep',
            'client/public/js/.gitkeep'
        ]);
        
        done();
    });
});
