const psi = require('psi');
const site = 'http://www.html5rocks.com';
// var key = '';

// Please feel free to use the `nokey` option to try out PageSpeed
// Insights as part of your build process. For more frequent use,
// we recommend registering for your own API key. For more info:
// https://developers.google.com/speed/docs/insights/v2/getting-started

const mobile = function () {
    return psi(site, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }).then(function (data) {
        console.log('data: ', data);
        // console.log('Speed score: ' + data.ruleGroups.SPEED.score);
        // console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
};

const desktop = function () {
    return psi(site, {
        nokey: 'true',
        // key: key,
        strategy: 'desktop',
    }).then(function (data) {
        console.log('data: ', data);
        // console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    });
};

exports.default = desktop;
exports.desktop = desktop;
exports.mobile = mobile;
