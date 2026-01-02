FROM node:lts-alpine3.23

WORKDIR /app

COPY package*.json .

RUN npm install

ENV PORT=5432

EXPOSE ${PORT}

USER node

COPY index.js .

CMD ["node", "index.js"]