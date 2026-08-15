# Step 1: Build stage using Node
FROM node:24-alpine AS build-stage

WORKDIR /app

# Install dependencies.
# --ignore-scripts because the "postinstall" hook runs `quasar prepare`, which
# validates the whole project tree (index.html, src/, postcss.config.js…) and
# fails if only the manifests have been copied. It is run below instead, once
# the sources are in place, so this layer still caches on package*.json alone.
COPY package*.json ./
RUN npm ci --ignore-scripts

# Copy source code
COPY . .

# What the skipped postinstall hook would have done
RUN npx quasar prepare

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
