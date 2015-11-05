State Manager - a decoreator function
=============
Add states``UNLOAD, LOADING, LOEADED, ERROR`` management support for ajax request.

1. ``UNLOAD``  before ajax request send
2. ``LOADING``  ajax request sended
3. ``LOEADED``  ajax request respond success
4. ``ERROR `` ajax request respond error

expample
------------
```
var fn = function() {
   var deferred = Q.defer();
    setTimeout(function() {
        deferred.resolve();
    }, 100);
    return deferred.promise;
 };
var smFn = sm(fn);

```
just pass your promise function in , you get a state manager function ``smFn ``.
1. now ``smFn.state == 'UNLOAD'``
after you request ``smFn() ``.
2. now ``smFn.state == 'LOADING'``
if the request returns success
3. then ```smFn.state == 'LOAD'```
or the request returns error
3. then you get ```smFn.state == 'ERROR'```
