FROM node:14.15.4-alpine AS base
WORKDIR /workspace
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS production
ENV NODE_PATH=./build
EXPOSE 5000
RUN npm run build
