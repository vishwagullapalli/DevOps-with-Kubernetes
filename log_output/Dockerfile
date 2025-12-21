FROM node:lts-alpine3.23

WORKDIR /app

COPY package*.json .

RUN npm install

COPY index.js .

CMD ["node", "index.js"]