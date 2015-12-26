var assetDir = './_assets';
var bowerDir = './bower_components';
var outputDir = './_site';
var jekyllDir = './assets';

module.exports = {
    bowerDirectory: bowerDir,

    src: {
        sass: assetDir + '/scss',
        sassFile: assetDir + '/scss/main.scss',
        scripts: [
            bowerDir + '/jquery/dist/jquery.js',
            assetDir + '/scripts/modernizr.custom.js',
            assetDir + '/scripts/**/*.js', 
        ],
        images: assetDir + '/img/**/*',
        icons: bowerDir + '/fontawesome/fonts/**.*'
    },

    jekyllDest: {
        sass: './assets/css',
        icons: './assets/fonts',
        scripts: './assets/scripts',
        images: './assets/img'
    },

    siteDest: {
        images: outputDir + '/assets/img',
        scripts: outputDir + '/assets/scripts',
        sass: outputDir + '/assets/css',
        icons: outputDir + '/assets/fonts'
    },

    messages: {
        jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
    }
}