#!/usr/bin/env bash
rm -rf deploy
mkdir deploy
mkdir deploy/fonts
cp wktools/bin/wkhtmltopdf deploy
cp -R src index.js package.json deploy
cp dependencies/* deploy
cp dependencies/fonts/* deploy/fonts
cd deploy
npm install --production

zip -q -r deployPackage.zip *
cp -r deployPackage.zip ../
rm -rf deploy

