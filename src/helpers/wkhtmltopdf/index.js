const wkhtmltopdf = require('wkhtmltopdf')

//wkhtmltopdf.command = `${process.cwd()}/wktools/bin/wkhtmltopdf`
wkhtmltopdf.command = '/opt/wkhtmltopdf'; //using lambda layer. see https://tech.mybuilder.com/compiling-wkhtmltopdf-aws-lambda-with-bref-easier-than-you-think/
module.exports = wkhtmltopdf
