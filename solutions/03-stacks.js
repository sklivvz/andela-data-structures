module.exports = function () {
	var buffer = [];
	for (var i = 0; i < 50; i++) {
		buffer[i] = 0;
	}

	var top = 0;
	var self = {};
	
	// push adds something to the buffer
	self.push = function (item) {
		if(top == buffer.length) {
			throw (new Error("Stack Overflow")); 
		}
		buffer[top++] = item;
	};
	
	// pop takes something from the buffer
	self.pop = function () {
		if(top <= 0) {
			throw (new Error("Stack Underflow")); 
		}
		return buffer[--top];
	};

	self.canRead = function () {
		return(top>0);
	};

	self.dump = function () {
		for (var i = 0; i <= top; i++) {
			var entry = i + ": " + buffer[i] + " ";
			if (top == i) entry += "T";
			console.log(entry);
		}
	};

	return self;
};