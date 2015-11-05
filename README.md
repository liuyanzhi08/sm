State Manager - a decoreator function
=============
Add states``UNLOAD, LOADING, LOAED, ERROR`` management support for ajax request.

1. ``UNLOAD``  before ajax request send
2. ``LOADING``  ajax request send
3. ``LOAED``  ajax request respond success
4. ``ERROR `` ajax request respond error

Example
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
Just pass your promise function in , you get a state manager function ``smFn ``.
>now ``smFn.state == 'UNLOAD'``

after you request ``smFn() ``.
>now ``smFn.state == 'LOADING'``

if the request returns success
>then ```smFn.state == 'LOAD'```

or the request returns error

>then you get ```smFn.state == 'ERROR'```

API
---
>**sm(promiseFn, msg)**: get the promiseFn's state manager
- params: 
  - ``promiseFn`` function that returns a *promise*
  - ``msg`` return msg. default is ``{s:'success', f:'fail'} ``, you can set it like this: ``{s:'mSuccess', f:'mFail'} ``
- return: DECORATED_FN[function]

>**DECORATED_FN.state**: get request state

- return: ``'UNLOAD'[string]`` ``'LOADING'[string]`` ``'LOADED'[string]`` ``'ERROR'[string]`` 

	
>**DECORATED_FN.msg**: get request returned msg
- return: ``msg[string]``

Version:
--------
**0.0.1**: first version

Licence
-------
Copyright (c) 2015 lyz Licensed under the [The MIT License (MIT)](http://opensource.org/licenses/MIT).