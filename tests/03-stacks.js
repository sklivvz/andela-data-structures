var stack = require("../parts/03-stacks.js");
var assert = require("testrunner.js");

module.exports = {
    'push': {
        'pushing one item works': function () {
            var sut = stack();
            sut.push("test");
        },
        'pushing many items works': function () {
            var sut = stack();
            for (var i = 0; i < 50; i++) {
                sut.push("test " + i);
            }
        },
        'pushing too many items throws an exception': function () {
            var sut = stack();
            for (var i = 0; i < 50; i++) {
                sut.push("test " + i);
            }
            assert.throws(function() { sut.push("test 51"); });
        },
    },
    'pop': {
        'popping one item works': function() {
            var sut = stack();
            sut.push("test");
            assert.areEqual("test", sut.pop());
        },
        'popping many items works': function() {
            var sut = stack();
            for (var i = 0; i < 50; i++) {
                sut.push("test " + i);
            }
            for (var i = 49; i >= 0; i--) {
                assert.areEqual("test " + i, sut.pop());
            }
        },
        'popping one too many items throws an exception': function() {
            var sut = stack();
            assert.throws(function(){ sut.pop(); });
        },
    },
    'canRead': {
        'before push canRead is false': function() {
            var sut = stack();
            assert.areEqual(false, sut.canRead());
        },
        'after push canRead is true': function(){
            var sut = stack();
            sut.push("test");
            assert.areEqual(true, sut.canRead());
        }
    }
};