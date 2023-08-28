FROM node:18-alpine AS base

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
ENV PORT 3000

CMD ["npm", "run", "start"]