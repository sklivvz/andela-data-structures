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
        // code here
    }
};

Object.prototype.filter = function* (func) {
    if (this.constructor.name=='GeneratorFunctionPrototype') {
        // code here
    }
};

Object.prototype.flatten = function* (func) {
    if (this.constructor.name=='GeneratorFunctionPrototype') {
        // code here
    }
};
