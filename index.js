const fs = require('fs');

const data = fs.readFileSync('data.json');
const json = JSON.parse(data);

let crashTime = 0
let output = ''
for (const x of json) {
    if (Array.isArray(x)) {
        let url, title = ''
        if (x[1].data.crashDetectedDate) {
            crashTime = x[1].data.crashDetectedDate
            output += `${crashTime} - ${new Date(crashTime).toDateString()}\n`
        }
        if (x[1].data.url) {
            title = x[1].data.title
            url = x[1].data.url

            // extract correct url from suspended tabs (the great suspender)
            if (url.startsWith('chrome-extension') && url.includes('uri=')) {
                url = url.split('uri=')[1]
            }

            output += (`\t${title} - ${url}\n`)
        }
    }
}
fs.writeFileSync('output.txt', output);