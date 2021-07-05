FROM node:alpine

RUN mkdir -p /usr/src/api-server-nodejs && chown -R node:node /usr/src/api-server-nodejs

WORKDIR /usr/src/api-server-nodejs

COPY package.json src .env ./

USER node

RUN npm i

COPY --chown=node:node . .

EXPOSE 5000
CMD ["npm", "start"]