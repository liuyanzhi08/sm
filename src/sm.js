function sm(fn, MSG) {
    if (typeof(fn) != 'function') {
        console.error('sm: typeof fn should be function. And the function should return a $promise');
        return;
    }

    if (!MSG) {
        MSG = { S: 'success', F: 'fail'}
    }

    var STATE = {
        'UNLOAD': 'UNLOAD',
        'LOADING': 'LOADING',
        'LOADED': 'LOADED',
        'ERROR': 'ERROR'
    }
    var ret = function() {
        var promise = fn(arguments);
        if (!promise || !promise.then) {
            console.error('sm: param function should return a $promise');
            return;
        }
        promise.then(function() {
            ret.state = STATE.LOADED;
            ret.msg = MSG.S;
        }, function() {
            ret.state = STATE.ERROR;
            ret.msg = MSG.F;
        });
        ret.state = STATE.LOADING;
        return promise;
    }
    ret.state = STATE.UNLOAD;
    return ret;
}

