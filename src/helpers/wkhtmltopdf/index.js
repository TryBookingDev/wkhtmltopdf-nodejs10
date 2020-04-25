const wkhtmltopdf = require('../../wkhtmltopdf1')

process.env.FONTCONFIG_PATH=`${process.cwd()}/fonts`;

//wkhtmltopdf.command = `${process.cwd()}/wktools/bin/wkhtmltopdf`

wkhtmltopdf.command = '/opt/wkhtmltopdf'; //using lambda layer. see https://tech.mybuilder.com/compiling-wkhtmltopdf-aws-lambda-with-bref-easier-than-you-think/

//wkhtmltopdf.command = `${process.cwd()}/wkhtmltopdf`; //working but pdf output has unreadable content
module.exports = wkhtmltopdf
