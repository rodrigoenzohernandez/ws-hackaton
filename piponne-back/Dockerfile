# Development stage
FROM node:18-alpine AS development

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3001

# Start in development mode
CMD ["npm", "run", "start:dev"]

# Production stage
FROM node:18-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built application from development stage
COPY --from=development /app/dist ./dist

# Expose port
EXPOSE 3001

# Start in production mode
CMD ["node", "dist/main"]
