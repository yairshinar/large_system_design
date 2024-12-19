# Build Stage
FROM node:16-alpine AS build

WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code and build the React app
COPY . .
RUN npm run build

# Production Stage
FROM node:16-alpine

WORKDIR /app

# Install Express
RUN npm install express

# Copy the build files from the build stage
COPY --from=build /app/build /app/build

# Add a simple Express server
COPY server.js /app/server.js

# Expose port 3000
EXPOSE 3000

# Start the Express server
CMD ["node", "server.js"]
