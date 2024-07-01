FROM node:slim

ENV NODE_ENV development

COPY ./client /react-docker/client

COPY ./common /express-docker/common

WORKDIR /react-docker/client

RUN npm install

CMD [ "npm", "run", "dev"]

EXPOSE 4000