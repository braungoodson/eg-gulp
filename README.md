eg-gulp
======

should be a module called gcc-gulp


usage
======

change into the directory

  $ cd eg-gulp

take a look at the gulp tasks available

  $ cat gulpfile.js|grep task

take a look at the dependencies

  $ cat gulpfile.js|grep var
  $ cat package.json|grep dependencies -A 11

run the default gulp task

  $ gulp

take a look at each gulp task definition in the gulpfile.js, and pay close attention to `paths()`.

  $ cat gulpfile.js|grep task\(\'clean -A 5
  $ cat gulpfile.js|grep task\(\'build -A 9
  $ cat gulpfile.js|grep task\(\'watch -A 2
  $ cat gulpfile.js|grep task\(\'dev -A 5
  $ cat gulpfile.js|grep task\(\'karma -A 12
  $ cat gulpfile.js|grep task\(\'default
  $ cat paths.js
