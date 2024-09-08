#!/bin/sh

# If you can't exec it, check permissions [chmod +x init.sh]
PROD_DIR=./prod

cp .env.example .env
cp ${PROD_DIR}/.env.example ${PROD_DIR}/.env
rm -rf .git
git init
# rm ./init.sh 
