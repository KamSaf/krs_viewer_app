FROM node:slim

ENV NODE_ENV development

WORKDIR /express-docker

COPY . .

COPY package-lock.json .

RUN npm install

RUN npm run build

CMD [ "npm", "run", "start"]

EXPOSE 3000