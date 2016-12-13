# angular2-webapp

A simple base project for Angular 2 apps, using Gulp to automate tasks and SystemJS to bundle the app.

This is a biggest example are used...

**NPM** - Package manager. Installs, publishes and manages node programs.

**GULP** - Build system automating tasks: minification and copying of all JavaScript files, static images, capable of watching files to automatically rerun the task when a file ...

**Angular2** - A powerfull framework for front-side, Angular is a development platform for building mobile and desktop web applications.

**Bootstrap** - Amazing responsive framework, Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web).

having everything you need: http templates, http get example, router examples...
Be happy


## Usage

Clone the repo to where you want to use it, then install the npm packages with `npm i` (install all dependences).

To generate the output directory `dist/` run the command `gulp` or `npm prod`.

If you add more `@angular` packages, you will need to update the `system.config.js` file to include them in the bundle during the build process.

## Tests

Tests are in the `test` directory, with one already there as an example. To run the tests, use the command `gulp test`. This generates the JavaScript files, then runs the tests against them.

You can have the tests auto-run when tests or ts files change by running the `gulp watchtests` command.

## Production

For a production setup, uncomment the lines in `main.ts` to put Angular in production mode. Then, run the minification task to minify vendor files `gulp minify`.


`Based on https://github.com/kiswa/angular2-base.git`
