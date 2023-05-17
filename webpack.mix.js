const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/index.js', 'public/js').react();
mix.js('resources/js/components/passwords.jsx', 'public/js/components/').react();
mix.js('resources/js/components/password.jsx', 'public/js/components/').react();
mix.js('resources/js/components/search.jsx', 'public/js/components/').react();

mix.sass('resources/sass/passwords.scss', 'public/css');
