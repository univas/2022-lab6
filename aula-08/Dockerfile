FROM node:18.12.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8087
CMD ["npm", "start"]