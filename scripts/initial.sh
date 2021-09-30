#!/bin/bash

# add permissions for scripts
chmod +x scripts/*.sh

npm install

# set env
cat .env.bak | awk '{ gsub("#", ""); print $1 }' > .env
