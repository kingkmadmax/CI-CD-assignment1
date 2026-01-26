#!/usr/bin/env sh

echo 'The following "npm" command builds your Node.js/React application for'
echo 'production in the local "build" directory, correctly bundles React in'
echo 'production mode and optimizes the build for the best performance.'
set -x
npm run build
set +x

echo 'The following "npm" command runs your Node.js/React application in'
echo 'preview mode and makes the application available for web browsing.'
echo 'The "npm run preview" command has a trailing ampersand so that the command runs'
echo 'as a background process (i.e. asynchronously). Otherwise, this command'
echo 'can pause running builds of CI/CD applications indefinitely.'
set -x
npm run preview -- --port 3000 --host &
sleep 1
echo $! > .pidfile
set +x

echo 'Now...'
echo 'Visit  http://localhost:4173/ to see your Node.js/React application in action.'
