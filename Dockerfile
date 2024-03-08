FROM node:16.16

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV NODE_OPTIONS=--max_old_space_size=8192

WORKDIR /app/vite
RUN npm update
RUN npm install

RUN npm run build:local

WORKDIR /app
RUN npm update
RUN npm install

RUN npm run build

CMD ["npm", "run", "preview"]
