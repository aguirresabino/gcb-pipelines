FROM node:lts-alpine

WORKDIR /app

EXPOSE 3000
ENTRYPOINT [ "yarn", "start:dev" ]