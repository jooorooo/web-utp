#!/bin/bash

cd /app/ && sleep 300 && composer install && php artisan migrate:refresh --seed --force