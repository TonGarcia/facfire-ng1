# FactoryFire ng1
FacFire is a FactoryFire framework to speedup the angular+firebase development env. It provide a simple and customizable Facade in a minified file.

## Firebase Fetures implemented
It framework provide as simple facade the listed features:

1. Firebase Auth actions
    * Login (SignIn)
    * Registration (SignUp)
    * Retrieve Password
    * Social Login (web & mobile-native (ionic))
1. Firebase CRUD
    * Validators (with popup alert)
    * Facade Access to CRUD actions (with angularfire querying)
1. MobileNative (ionic)
    * Social LogIn
    * Google Map
    * Call External App

## Installing it framework (production)
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

## Contributing (development)
