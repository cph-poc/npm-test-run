FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install -g nodemon
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
# docker build . -t node-web-app
# docker run -p 8080:3000 -d node-web-app:latest
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]