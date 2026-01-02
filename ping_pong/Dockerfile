FROM node:lts-alpine3.23

WORKDIR /app

COPY package*.json .

RUN npm install

ENV PORT=7654

EXPOSE ${PORT}

USER node

COPY app.js .

CMD ["node", "app.js"]
