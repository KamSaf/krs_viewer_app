FROM node:slim

ENV NODE_ENV development

RUN mkdir -p /react-docker/client

COPY ./client/package.json /react-docker/client

COPY ./client/package-lock.json /react-docker/client

WORKDIR /react-docker/client

RUN npm install

COPY ./common ../common

COPY ./client .

CMD [ "npm", "run", "dev"]

EXPOSE 4000