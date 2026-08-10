# Step 1: Build stage using Node
FROM node:20-alpine AS build-stage

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci || npm install

# Copy source code and build SPA output
COPY . .
RUN npx quasar build

# Step 2: Production web server using NGINX
FROM nginx:alpine AS production-stage

# Copy compiled static assets from build-stage to NGINX root directory
COPY --from=build-stage /app/dist/spa /usr/share/nginx/html

# Config for Vue Router History Mode (redirects 404s back to index.html)
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
