var wkhtmltopdf = require('./src/helpers/wkhtmltopdf');

process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

exports.handler = async (event) => {
    var writePdfDone = false;
    const html = '<h1>Test</h1>';
    wkhtmltopdf(html, { pageSize: 'letter'}, function(error, stream) {
        console.log("error:", error);
        console.log("Here is the Stream", stream);
        writePdfDone = true;
    })

    while(writePdfDone === false){
        
    }
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
}; 