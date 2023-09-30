
FROM node:18.0.0-alpine

# set working directory inside the container
WORKDIR /app

# Install Python and other build dependencies
RUN apk add --no-cache python3 make g++

# copy package.json and package-lock.json to the working directory
COPY package*.json ./

# install dependencies
RUN npm install


# copy .env file into the container
COPY .env ./

# copy all files from the current directory to the working directory
COPY . .

#RUN npm run build


# Start the app
CMD ["npm", "run", "start"]

