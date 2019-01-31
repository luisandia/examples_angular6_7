# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

#generate token

post to:


https://accounts.spotify.com/api/token

in headers:
Content-Type:application/x-www-form-urlencoded

data:
{
    "grant_type":"client_credentials",
    "client_id":"581d6d530e594030b1c9e4cb18c08ab6",
    "client_secret":"35c3b18b9a0b4644b6066c88b6c4e20d"
}

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
