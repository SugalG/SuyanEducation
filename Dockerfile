# Use Node 20 Alpine as base
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install system dependencies needed for Prisma on Alpine
RUN apk add --no-cache \
    openssl1.1 \
    libstdc++ \
    bash \
    curl \
    git \
    libc6-compat

# Copy package.json and lock file
COPY package*.json ./

# Install Node dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build Next.js app
RUN npm run build

# Expose port
EXPOSE 7006

# Start the app
CMD ["npm", "start"]

