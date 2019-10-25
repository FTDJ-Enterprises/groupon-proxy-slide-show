FROM node:10

RUN mkdir -p /src/app

COPY . /src/app

WORKDIR /src/app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]