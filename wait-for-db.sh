#!/usr/bin/env bash

while ! docker exec mysql mysqladmin --user=web --password=web --host mariadb ping --silent &> /dev/null ; do
    echo "Waiting for database connection..."
    sleep 2
done