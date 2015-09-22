Package.describe({
    name: 'zyon:plyr',
    version: '0.0.1',
    summary: 'Plyr (v1.3.6) repackaged for Meteor',
    git: 'https://github.com/zyoninc/plyr.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.1');
    api.use('ecmascript');
    api.use('jquery', 'client');
    var path = Npm.require('path');
    var assetPath = path.join('files/sprite/');
    api.addFiles('files/plyr.css', 'client');
    api.addFiles('files/plyr.js', 'client');
    api.addFiles('files/sprite.svg', 'client');

    var assetFiles = [
        assetPath + 'icon-captions-off.svg',
        assetPath + 'icon-captions-on.svg',
        assetPath + 'icon-enter-fullscreen.svg',
        assetPath + 'icon-exit-fullscreen.svg',
        assetPath + 'icon-fast-forward.svg',
        assetPath + 'icon-muted.svg',
        assetPath + 'icon-pause.svg',
        assetPath + 'icon-play.svg',
        assetPath + 'icon-restart.svg',
        assetPath + 'icon-rewind.svg',
        assetPath + 'icon-volume.svg'
    ];
    api.add_files(assetFiles, 'client');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('zyon:plyr');
});