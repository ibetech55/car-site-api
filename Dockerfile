FROM node:14.19.1

EXPOSE 8000

WORKDIR /app

COPY ./package*.json ./

RUN npm install -g npm

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
