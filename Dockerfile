FROM nginx:alpine

# copy the public folder to the server html root
# the ./ is import for it to work in GitHub CI/CD
COPY   ./build   /usr/share/nginx/html/app/demos
