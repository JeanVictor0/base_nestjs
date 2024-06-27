FROM node:20-alpine as NODE_DEV

WORKDIR /home/node

COPY . .

RUN npm i

CMD ["npm", "run", "start:dev"]
