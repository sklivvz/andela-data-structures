module.exports = function () {
	var buffer = [];
	for (var i = 0; i < 50; i++) {
		buffer[i] = 0;
	}

	var top = -1;
	var self = {};
	
	// push adds something to the buffer
	self.push = function (item) {
		// your code here
	};
	
	// pop takes something from the buffer
	self.pop = function () {
		// your code here
		return null;
	};

	self.canRead = function () {
		// your code here
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