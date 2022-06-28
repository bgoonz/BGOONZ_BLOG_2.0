---
title: title
subtitle: subtitle
date: '2022-01-03'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
    title: ''
    description: ''
    robots: []
    extra: []
template: post
thumb_img_path: images/css-72a655a7.jpg
---

---

title: Angular.js
category: JavaScript libraries

---

```html
<html ng-app="nameApp"></html>
```

### Lists (ng-repeat)

```html
<ul ng-controller="MyListCtrl">
    <li ng-repeat="phone in phones">{{phone.name}}</li>
</ul>
```

### Model (ng-model)

```html
<select ng-model="orderProp">
    <option value="name">Alphabetical</option>
    <option value="age">Newest</option>
</select>
```

### Defining a module

```js
    App = angular.module('myApp', []);

    App.controller('MyListCtrl', function ($scope) {
      $scope.phones = [ ... ];
    });
```

### Controller with protection from minification

```js
    App.controller('Name', [
      '$scope',
      '$http',
      function ($scope, $http) {
      }
    ]);

    a.c 'name', [
      '$scope'
      '$http'
      ($scope, $http) ->
    ]
```

### Service

```js
App.service('NameService', function ($http) {
    return {
        get: function () {
            return $http.get(url);
        }
    };
});
```

In controller you call with parameter and will use promises to return data from server.

```js
App.controller('controllerName', function (NameService) {
    NameService.get().then(function () {});
});
```

### Directive

```js
App.directive('name', function () {
    return {
        template: '<h1>Hello</h1>'
    };
});
```

In HTML will use `<name></name>` to render your template `<h1>Hello</h1>`

### HTTP

```js
App.controller('PhoneListCtrl', function ($scope, $http) {
    $http.get('/data.json').success(function (data) {
        $scope.phones = data;
    });
});
```

References:

- https://github.com/angular/angular-seed
- https://angularjs.org/
