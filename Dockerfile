FROM node:16-alpine

# add bash
RUN apk update
RUN apk upgrade
RUN apk add bash

WORKDIR /app
COPY . /app
RUN npm install
COPY ./scripts/wait-for-it.sh /usr/local
RUN chmod +x /usr/local/wait-for-it.sh

EXPOSE 3000

CMD ["npm", "start"]
