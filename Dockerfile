FROM node:18-alpine

LABEL type="dummy"

COPY . /app
WORKDIR /app

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["npm", "start"]