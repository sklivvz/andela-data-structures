
module.exports = {
}

Object.prototype.each = function (func) {
    if (this.constructor.name=='GeneratorFunctionPrototype') {
        var item = this.next();
        while(!item.done) {
            func(item.value);
            item = this.next();
        }
    }
};

Object.prototype.fold = function (initial_accumulator, func) {
    if (this.constructor.name=='GeneratorFunctionPrototype') {
        var item = this.next();
        var accumulator = initial_accumulator;
        while(!item.done) {
            accumulator = func(accumulator, item.value);
            item = this.next();
        }
        return accumulator;
    }
};

Object.prototype.max = function (func) {
    if (this.constructor.name=='GeneratorFunctionPrototype') {
        return this.fold(undefined, function(accumulator, item){
            var val = func(item);
            if (accumulator == undefined || val>accumulator) {
                return val;
            }
            return accumulator;
        });
    }
};
