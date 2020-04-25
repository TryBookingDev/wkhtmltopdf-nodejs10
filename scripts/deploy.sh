#!/usr/bin/env bash
rm -rf deploy
mkdir deploy
cp wktools/bin/wkhtmltopdf deploy
cp -R src index.js package.json deploy
cp -r dependencies deploy
cd deploy
npm install --production

zip -q -r deployPackage.zip *
cp -r deployPackage.zip ../
rm -rf deploy

