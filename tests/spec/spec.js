describe("state:", function() {
    var fn, smFn;
    beforeEach(function() {
        fn = function() {
            var deferred = Q.defer();
            setTimeout(function() {
                deferred.resolve();
            }, 100);
            return deferred.promise;
        };
        smFn = sm(fn);
    })
    it("before request, state should be 'UNLOAD'", function() {
        expect(smFn.state).toBe('UNLOAD');
    })
    it("request send and server hasn't responded, state should be 'LOADING'", function() {
        smFn();
        expect(smFn.state).toBe('LOADING');
    })
    it("request has responded, state should be 'LAODED'", function(done) {
        smFn().then(function() {
            expect(smFn.state).toBe('LOADED');
            done();
        })
    })
    it("request has responded, state should be 'ERROR'",function(done) {
        var fnFail = function() {
            var deferred = Q.defer();
            setTimeout(function() {
                deferred.reject();
            }, 500);
            return deferred.promise;
        };
        var smFnFail = sm(fnFail);

        smFnFail().then(function() {

        }, function() {
            expect(smFnFail.state).toBe('ERROR');
            done();
        })
    })
});
describe("response:", function() {
    var fn, smFn;
    beforeEach(function() {
        fn = function() {
            var deferred = Q.defer();
            setTimeout(function() {
                var fakeData = 'foo';
                deferred.resolve(fakeData);
            }, 100);
            return deferred.promise;
        };
        smFn = sm(fn);
    })
    it("request has responded, data should be return", function(done) {
        smFn().then(function(data) {
            expect(data).toBe('foo');
            done();
        })
    })
})