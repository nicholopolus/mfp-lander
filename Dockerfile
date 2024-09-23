FROM php:8-fpm
WORKDIR /var/www/html
RUN apt update && apt install -y git zip unzip curl
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer
COPY ./src /var/www/html
# RUN COMPOSER_ALLOW_SUPERUSER=1 composer install
