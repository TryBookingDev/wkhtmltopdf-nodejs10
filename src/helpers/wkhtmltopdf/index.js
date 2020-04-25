const wkhtmltopdf = require('../../wkhtmltopdf1')

//wkhtmltopdf.command = `${process.cwd()}/wktools/bin/wkhtmltopdf`
//wkhtmltopdf.command = '/opt/wkhtmltopdf'; //using lambda layer. see https://tech.mybuilder.com/compiling-wkhtmltopdf-aws-lambda-with-bref-easier-than-you-think/
process.env.FONTCONFIG_PATH=`${process.cwd()}/fonts`;
wkhtmltopdf.command = `${process.cwd()}/wktools/bin/wkhtmltopdf`;
module.exports = wkhtmltopdf
