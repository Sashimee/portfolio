# Step 1: Build stage using Node
FROM node:24-alpine AS build-stage

WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY quasar.config.js ./
RUN npm ci

# Copy source code
COPY . .

RUN npm run build

# Step 2: Production web server using NGINX
FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist/spa /usr/share/nginx/html

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
