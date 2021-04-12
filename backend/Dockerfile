FROM node:14.15.4-alpine
ENV NODE_ENV=production
WORKDIR /workspace
COPY package*.json ./
RUN npm install --production
COPY . .
CMD ["node", "server.js"]
