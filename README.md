# FactoryFire ng1
FacFire is a FactoryFire framework to speedup the angular+firebase development env. It provide a simple and customizable Facade in a minified file.

## Firebase Fetures implemented
It framework provide as simple facade the listed features:

1. Firebase Auth actions (__since v0__)
    * Login (SignIn)
    * Registration (SignUp)
    * Retrieve Password
    * Social Login (web & mobile-native (ionic))
1. Firebase CRUD (__since v0__)
    * Validators (with popup alert)
    * Facade Access to CRUD actions (with angularfire querying)
1. MobileNative (ionic) (__since v1__)
    * Social LogIn
    * Google Map
    * Call an Installed App on the Device (Android only)

## Installing it framework (production-mode)
It is a ionic start project, so you might run the installations bellow, which are not versionated on git

### __if bower__ project

1. Install it dependency
    ```shell
        $ bower install facfire-ng1 --save
    ```

2. Add it to your HTML head
    ```html
        <script src="facfire-ng1/dist/facfire-ng1.min.js"></script>
    ```

### __if non-bower__ project (using CDN)

- Remember to change {version} to your app dependency, like 0.0.6, for example
    ```html
        <script src="https://bowercdn.net/c/facfire-ng1-{version}/dist/facfire-ng1-min.js"></script>
    ```

## How to contribute with code (development-mode)

1. [Install node.js](https://nodejs.org/en/download/package-manager/)
1. Clone it repository
    ```shell
      $ git clone git@github.com:FactoryFire/facfire-ng1.git
    ```
1. Install ionic (to use our dev project environment, included in it repository)
    ```shell
      $ npm install -g ionic
    ```
1. Install bower
    ```shel
      $ npm install -g bower
    ```
1. Install all dependencies
    ```shell
      $ npm install
      $ bower install
    ```
1. Running it project
    ```shell
      $ ionic serve
      OR
      $ ionic serve --lab
    ```
    
You can edit it framework source files (directory: src-lib) and the Gulp will Watch and update it lib min file, used in the TestApp.

Discuss your plans in our mailing list (http://groups.google.com/group/facfire-dev).

After that, just fork the project, change what you want, and send us a pull request.

### Best practices (or how to get your pull request accepted faster)

* Follow this style guide: [https://github.com/johnpapa/angular-styleguide/tree/master/a1](https://github.com/johnpapa/angular-styleguide/tree/master/a1)
* Create one acceptance tests for each scenario of the feature you are trying to implement (tests not added yet, probably in v1).
* We use BDD, so if you create a controller/view test, it might get 100% covered code.
* Feel free to add specs to committed code that lacks coverage ;)
* Let our tests serve as a style guide: we try to use implicit spec subjects and lazy evaluation wherever we can.

## Credits

Author: Ilton Silveira

## License

Copyright(c) 2017 - Factory Fire Technology Ltda. 

Licensed under the MIT license (see MIT-LICENSE file)