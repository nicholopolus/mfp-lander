#!/bin/bash

docker build --platform=linux/amd64 -t registry.solarcompare.com/mfp/prod-lbal:latest -f ./release/nginx.Dockerfile . && \
docker build --platform=linux/amd64 -t registry.solarcompare.com/mfp/prod-lander:latest -f ./release/fpm.Dockerfile .
docker push registry.solarcompare.com/mfp/prod-lbal:latest && \
docker push registry.solarcompare.com/mfp/prod-lander:latest

