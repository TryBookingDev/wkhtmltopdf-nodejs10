var wkhtmltopdf = require('./src/helpers/wkhtmltopdf');
//var MemoryStream = require('memorystream');

process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

exports.handler = function(event, context) {
    var memStream = new MemoryStream();
    var html_utf8 = Buffer.from(event.html_base64, 'base64').toString('utf8');
    console.log('html_utf8', html_utf8);
    event.debug = true;
    wkhtmltopdf(html_utf8, event.options, function(code, signal) { 
            console.log('done', code, signal);
            context.done(null, { pdf_base64: memStream.read().toString('base64')}); 
    }).pipe(memStream);
};



// exports.handler = async (event, context) => {
//     const html = '<h1>Test</h1>'
//     wkhtmltopdf(html, { pageSize: 'letter'}, function(error, stream) {
//         console.log("error", error);
//         console.log("Here is the Stream", stream);
//         context.done(null, { pdf_base64: stream.read().toString('base64')});
//     });
// };