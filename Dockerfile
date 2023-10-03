# Use the official Node.js 14 base image
FROM node:18

# Set the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install


# Copy the rest of the application code
ADD server /server/
ADD client /client/

# Expose a port for the app to listen on
EXPOSE 3000

# Start the app
CMD [ "node", "index.js" ]