FROM node:16.16

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV NODE_OPTIONS=--max_old_space_size=8192

WORKDIR /app/vite

RUN npm install

RUN npm run build:local

WORKDIR /app

RUN npm install

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 4173
CMD ["npm", "run", "preview"]
