FROM node:16
# Create app directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

COPY ./ ./
# RUN npm install # For DEV
# If you are building your code for production
RUN npm i

CMD ["npm", "run", "start"]