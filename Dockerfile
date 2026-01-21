# Use Node 20 Alpine as base
FROM node:20-bullseye

# Set working directory
WORKDIR /app

# Build argument for database URL
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# Copy package.json and lock file
COPY package*.json ./

# Install Node dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Copy environment file for build-time access
COPY .env.production .env

# Generate Prisma client
RUN npx prisma generate

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 7006

# Start the app
CMD ["npm", "start"]

