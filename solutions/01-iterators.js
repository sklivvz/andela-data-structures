module.exports = {

    numbers: function* (){
        var i = 0;
        while (true) {
            yield i++;
        }
    }
}
Object.prototype.project = function* (func) {
    if (this.constructor.name=='GeneratorFunctionPrototype') {
        var cur = this.next();
        while(!cur.done) {
            yield func(cur.value);
            cur = this.next();
        }
    }
};

Object.prototype.filter = function* (func) {
    if (this.constructor.name=='GeneratorFunctionPrototype') {
        var cur = this.next();
        while(!cur.done) {
            if (func(cur.value)) {
                yield cur.value;
            }
            cur = this.next();
        }
    }
};

Object.prototype.flatten = function* (func) {
    if (this.constructor.name=='GeneratorFunctionPrototype') {
        var cur = this.next();
        while(!cur.done) {
            var inner = func(cur.value);
            var cur_inner = inner.next();
            while(!cur_inner.done) {
                yield cur_inner.value;
                cur_inner = inner.next();
            }
            cur = this.next();
        }
    }
};
