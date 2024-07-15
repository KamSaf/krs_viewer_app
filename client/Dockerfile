FROM node:slim

ENV NODE_ENV development

RUN mkdir -p /react-docker/client

COPY ./client/package.json /react-docker/client

COPY ./client/package-lock.json /react-docker/client

COPY ./common /express-docker/common

WORKDIR /react-docker/client

RUN npm install

COPY ./client /react-docker/client

CMD [ "npm", "run", "dev"]

EXPOSE 4000