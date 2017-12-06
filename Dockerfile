FROM node:9.2-alpine

RUN mkdir -p /app
COPY . /app

WORKDIR /app
RUN npm install

EXPOSE 3000
