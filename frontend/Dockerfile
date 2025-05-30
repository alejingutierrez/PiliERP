# Stage 1: Build the React application
FROM node:18-alpine AS build-stage

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if used)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine

# Copy built assets from the build stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Nginx will automatically start and serve files from /usr/share/nginx/html
# when the container starts.
CMD ["nginx", "-g", "daemon off;"]
