FROM node:slim

ENV NODE_ENV development

WORKDIR /react-docker

COPY . .

RUN npm install

CMD [ "npm", "run", "dev"]

EXPOSE 4000