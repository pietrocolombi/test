FROM node:carbon
MAINTAINER sviluppatore1
# Create app directory
WORKDIR /usr/src/app
RUN npm config set proxy http://gs02437:corsico9@10.209.4.37:8080

RUN npm config set https-proxy http://gs02437:corsico9@10.209.4.37:8080

COPY package.json ./

RUN npm install

COPY server.js /usr/src/app

EXPOSE 8080

CMD [ "npm", "start" ]




