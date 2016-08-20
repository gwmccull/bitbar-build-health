#!/usr/bin/env /Users/gmccullough/.nvm/versions/node/v6.2.2/bin/node

// <bitbar.title>website-status</bitbar.title>
// <bitbar.author>Garrett McCullough</bitbar.author>
// <bitbar.author.github>gwmccull</bitbar.author.github>
// <bitbar.desc>Gets the status of API</bitbar.desc>
// <bitbar.version>1.0</bitbar.version>

const url = 'http://build-api-dev-1.build.internal:8080/health';  // replace with your url

const icons = {
	UP: '✅️',
	DOWN: '⛔️',
	UNKNOWN: '⚠️️',
};


function handleResponse({ status }) {
	const icon = icons[status] || icons['UNKNOWN'];
	console.log(icon + '\n---\n' + status);
}


const http = require('http');
const req = http.get(url, function(res) {
	let body = '';
	res.on('data', function(data) {
		body += data;
	});
	res.on('end', function() {
		handleResponse(JSON.parse(body));
	});
});

req.on('error', function(err) {
	handleResponse({ status: err.code });
});
req.on('timeout', function(err) {
	handleResponse({ status: 'UNKNOWN' });
});
