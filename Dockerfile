FROM node:alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY . /usr/src


RUN npm install

CMD npm run dev


