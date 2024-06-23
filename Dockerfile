FROM node:20-alpine as NODE_DEV

WORKDIR /home/node

COPY . .

RUN yarn --silent --prefer-offline --no-progress

CMD ["npm", "run", "start:dev"]