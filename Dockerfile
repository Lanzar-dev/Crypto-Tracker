# Build the React app
FROM node:lts-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --silent

# Copy the rest of the source code and build the project
COPY . .
RUN npm run build

# Serve with NGINX
FROM nginx:alpine
# Copy the built app to NGINX's HTML directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]