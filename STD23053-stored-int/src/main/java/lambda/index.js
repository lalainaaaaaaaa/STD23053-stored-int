const fs = require('fs');
const filePath = '/tmp/stored-int.txt';

function handler(event, context) {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        const number = parseInt(data, 10);

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ storedInt: number }),
        };
    } else {
        const number = Math.floor(Math.random() * 1001);
        fs.writeFileSync(filePath, number.toString(), 'utf8');

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ storedInt: number }),
        };
    }
}

exports.handler = handler;
