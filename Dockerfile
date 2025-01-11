# Use the official Node.js image as the base image
FROM node:20-slim as build-stage

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt application
RUN npm run build

# Use the official Nginx image as the base image for the production stage
FROM nginx:stable-alpine as production-stage

# Copy the built application from the build stage
COPY --from=build-stage /app/.nuxt /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]