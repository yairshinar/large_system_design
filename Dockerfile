# Dockerfile for React app
FROM node:16-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY ./src ./src
COPY ./public ./public
COPY webpack.config.js .
COPY .babelrc .

RUN npm run build

# Serve the app with React routing support
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
