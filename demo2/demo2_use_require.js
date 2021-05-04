const request = require('request');
const url = "https://www.uuu.com.tw"
console.log('start');
request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // console.log(body);
        console.log('response body~~');
    } else {
        console.log(error)
        console.log(response.statusCode)
        console.log(body)
    }
})
console.log('end');

