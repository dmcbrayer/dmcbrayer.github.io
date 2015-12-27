var assetDir = './_assets';
var bowerDir = './bower_components';
var outputDir = './_site/assets';
var jekyllDir = './assets';
var assetJekyllDir = './assets'; // This is the intermediate directory that Jekyll needs

module.exports = {

    bowerDirectory: bowerDir,

    // These are the static files that gulp will watch for changes
    watchHtmlFiles: [
        'index.html', 
        '_layouts/*.html', 
        '_includes/*', 
        '_posts/*',
        '_pages/**/*',
    ],

    // Asset files that gulp will watch for changes
    watchAssetFiles: [
        assetDir + '/scss/**/*.scss',
        assetDir + '/scripts/**/*.js',
        assetDir + '/images/**/*'
    ],

    src: {
        sass: assetDir + '/scss',
        sassFile: assetDir + '/scss/main.scss',
        scripts: [
            bowerDir + '/jquery/dist/jquery.js',
            assetDir + '/scripts/modernizr.custom.js', // this needs to come before the bundle for dl-menu to work
            assetDir + '/scripts/**/*.js', 
        ],
        images: assetDir + '/img/**/*',
        icons: bowerDir + '/fontawesome/fonts/**.*'
    },

    jekyllDest: {
        sass: assetJekyllDir + '/css',
        icons: assetJekyllDir + '/fonts',
        scripts: assetJekyllDir + '/scripts',
        images: assetJekyllDir + '/img'
    },

    siteDest: {
        images: outputDir + '/img',
        scripts: outputDir + '/scripts',
        sass: outputDir + '/css',
        icons: outputDir + '/fonts'
    },

    messages: {
        jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
    }
}