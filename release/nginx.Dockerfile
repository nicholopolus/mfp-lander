FROM nginx:latest

COPY ./release/default.conf /etc/nginx/conf.d/default.conf
COPY ./src /var/www/html