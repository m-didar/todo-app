FROM node:14.15.4-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY public ./public
COPY src ./src
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
