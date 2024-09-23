FROM php:8-fpm
RUN apt update && apt install -y git zip unzip curl
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer
COPY ./src /var/www/html

RUN chown -R www-data:www-data /var/www/html