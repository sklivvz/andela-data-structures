var runner = require("testrunner.js");
var tests; 

switch(process.argv.splice(2) | 0)
{
    case 3:
        tests = require("./tests/03-stacks.js");
        break;
    case 2:
        tests = require("./tests/02-iterators-2.js");
        break;
    case 1:
    default:
        tests = require("./tests/01-iterators.js");
        break;
}

runner.run(tests);