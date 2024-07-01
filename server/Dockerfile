FROM node:slim

ENV NODE_ENV development

COPY ./server /express-docker/server

COPY ./common /express-docker/common

WORKDIR /express-docker/server

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start"]

EXPOSE 3000