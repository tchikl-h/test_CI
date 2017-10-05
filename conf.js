var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://192.168.43.93:4444/wd/hub',
    capabilities: {
	'browserName': 'phantomjs'
    },
    specs: ['notif.js'],
    jasmineNodeOpts: {
	defaultTimeoutInterval: 2500000
    }
};

/*exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js']
};*/
