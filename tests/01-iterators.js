var iterators = require("../parts/01-iterators.js");
var assert = require("testrunner.js");

function* yield3(){var i=0;while(i<3){yield i++;}}

function* yield3x3(){
    yield { inner: yield3() };
    yield { inner: yield3() };
    yield { inner: yield3() };
}

module.exports = {
    'Filter:': {
        'always true returns all': function () {
            var sut = iterators.numbers().filter(function(i){return true;});
            assert.areEqual(0, sut.next().value);
            assert.areEqual(1, sut.next().value);
            assert.areEqual(2, sut.next().value);
        },
        'even returns even': function () {
            var sut = iterators.numbers().filter(function(i){return i%2==0;});
            assert.areEqual(0, sut.next().value);
            assert.areEqual(2, sut.next().value);
            assert.areEqual(4, sut.next().value);
        },
    },
    'Project:': {
        'one returns one': function () {
            var sut = iterators.numbers().project(function(i){return 1;});
            assert.areEqual(1, sut.next().value);
            assert.areEqual(1, sut.next().value);
            assert.areEqual(1, sut.next().value);
        },
        'identity returns self': function () {
            var sut = iterators.numbers().project(function(i){return i;});
            assert.areEqual(0, sut.next().value);
            assert.areEqual(1, sut.next().value);
            assert.areEqual(2, sut.next().value);
        },
        'square works': function () {
            var sut = iterators.numbers().project(function(i){return i*i;});
            assert.areEqual(0, sut.next().value);
            assert.areEqual(1, sut.next().value);
            assert.areEqual(4, sut.next().value);
            assert.areEqual(9, sut.next().value);
        },
    },
    'Flatten:': {
        'basic flatten': function () {
            var sut = yield3x3().flatten(function(i){return i.inner;});
            assert.areEqual(0, sut.next().value);
            assert.areEqual(1, sut.next().value);
            assert.areEqual(2, sut.next().value);
            assert.areEqual(0, sut.next().value);
            assert.areEqual(1, sut.next().value);
            assert.areEqual(2, sut.next().value);
            assert.areEqual(0, sut.next().value);
            assert.areEqual(1, sut.next().value);
            assert.areEqual(2, sut.next().value);
        },
        'non flatten': function () {
            var sut = yield3x3().flatten(function(i){return (function*(){yield 0;})();});
            assert.areEqual(0, sut.next().value);
            assert.areEqual(0, sut.next().value);
            assert.areEqual(0, sut.next().value);
        },
        'directly embed generator': function() {
            var sut = iterators.numbers().flatten(function(i){
                return function*(){
                    for(var j=0; j<=i; j++) {
                        yield j*i;
                    }
                }();
            });
            assert.areEqual(0, sut.next().value);
            assert.areEqual(0, sut.next().value);
            assert.areEqual(1, sut.next().value);
            assert.areEqual(0, sut.next().value);
            assert.areEqual(2, sut.next().value);
            assert.areEqual(4, sut.next().value);
        }
    },
}