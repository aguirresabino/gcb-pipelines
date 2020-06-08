FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./
RUN yarn install --audit
COPY . .

EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]