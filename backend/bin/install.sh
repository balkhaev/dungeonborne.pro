#!/usr/bin/bash

npm ci
mv -f ../.env.backend .env
# npm run generate:types
npm run build
