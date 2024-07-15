FROM node:slim

ENV NODE_ENV development

RUN mkdir -p /express-docker/server

COPY ./server/package.json /express-docker/server

COPY ./server/package-lock.json /express-docker/server

COPY ./common /express-docker/common

WORKDIR /express-docker/server

RUN npm install

COPY ./server /express-docker/server

RUN npm run build

CMD [ "npm", "run", "start"]

EXPOSE 3000