FROM php:apache-buster

SHELL ["/bin/bash", "--login", "-c"]

RUN apt update \
    && apt install -y git libicu-dev libzip-dev libpng-dev unzip

RUN docker-php-ext-install zip gd intl mysqli pdo pdo_mysql \
    && docker-php-ext-enable zip gd intl mysqli pdo pdo_mysql

RUN a2enmod rewrite

RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
RUN nvm install node

RUN npm install -g npm

WORKDIR /var/www/guestbook

EXPOSE 80
