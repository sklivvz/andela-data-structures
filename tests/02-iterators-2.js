var iterators = require("../parts/02-iterators-2.js");
var assert = require("testrunner.js");

function* yield3(){var i=0;while(i<3){yield i++;}}

module.exports = {
    'Each:': {
        'function is called N times': function () {
            var count = 0;
            yield3().each(function(i){count++;});
            assert.areEqual(3, count);
        },
        'function is called with item': function () {
            var sum = 0;
            yield3().each(function(i){sum+=i;});
            assert.areEqual(3, sum);
        },
    },
    'Fold:': {
        'function is called N times': function () {
            var count = 0;
            yield3().fold(null,function(a,i){
                count++;
                return null;
            });
            assert.areEqual(3, count);
        },
        'function is called with item': function () {
            var sum = 0;
            yield3().fold(null,function(a,i){
                sum+=i;
                return null;
            });
            assert.areEqual(3, sum);
        },
        'accumulates': function () {
            var sut = yield3().fold(0,function(a,i){
                assert.areEqual(i,a);
                return a+1;
            });
            assert.areEqual(3, sut);
        },
    },
    'Max:': {
        'works on positive ints': function () {
            var sut = yield3().max(function(i){return i;});
            assert.areEqual(2, sut);
        },
        'works on negative ints': function () {
            var sut = yield3().max(function(i){return -i;});
            assert.areEqual(0, sut);
        },
    },
}