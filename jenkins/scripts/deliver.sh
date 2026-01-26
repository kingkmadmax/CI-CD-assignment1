#!/usr/bin/env sh

echo 'The following "npm" command builds your React application for production'
set -x
npm run build
set +x

echo 'The following command runs your React application using a simple HTTP server'
echo 'to serve the built files from the dist directory.'
set -x
npx --yes serve -s dist -l 3000 &
pid=$!
echo $pid > .pidfile
set +x

echo 'Now...'
echo 'Visit http://localhost:3000 to see your React application in action.'
