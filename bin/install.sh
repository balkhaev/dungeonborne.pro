#!/usr/bin/bash

cd backend

npm ci
mv -f ../../.env.backend .env
npm run build

cd ../frontend

npm ci
mv -f ../../.env.frontend .env
npm run build
