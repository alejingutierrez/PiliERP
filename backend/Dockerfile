# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Bundle app source
COPY . .

# Make port 3001 available to the world outside this container
EXPOSE 3001

# Define environment variable for the port
ENV PORT=3001

# Run server.js when the container launches
CMD ["node", "server.js"]
