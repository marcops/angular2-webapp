(function(global) {
  var map = {
    'app':      '',
    'rxjs':     'node_modules/rxjs',
    '@angular': 'node_modules/@angular'
  };

  var packages = {
    'app':  { main: 'app/main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  var angularPackages = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
  ];

  angularPackages.forEach(function(pkgName) {
    packages['@angular/' + pkgName] = {
      main: 'bundles/' + pkgName + '.umd.js',
      defaultExtension: 'js'
    };
  });

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
