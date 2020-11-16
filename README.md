# VividFilms

## Specifications and personal considerations

### The user sees all the new movies on the main page
So I keep it simple, I show the list on the root route.
If we'll introduce the auth system, I will redirect the user to the login page if it's authenticated yet.
For semplicity, I will create components (for the fil list and for the film detail) instead of modules 
(these components won't be shared in any other module).

### The user scrolls down the main page to see the movies based on release date
For a better user experience let's implenent an infinite scroll instead of a pagination.
I'll adopt an exixting library, maybe from ngx.

### The user can save a “watch list” of the movies they want to watch
It's like a shopping cart, I'll try to build it as generic as I can, so to reuse it in the future.

### The user can click on any movie and continue navigating to the movie page (details page)
I will create a component for the detail page, I will pass the paramater in a query string

### On the page of a given movie, the user sees the detailed data of the movie: movie description, rating, actors, reviews.
Usual detail page

## Technology

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
