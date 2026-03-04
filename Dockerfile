# Use Node.js LTS version
FROM node:20-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install --production

# Bundle app source
COPY . .

# Expose the port (Render handles this automatically but it's good practice)
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]