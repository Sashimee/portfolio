# Le service de courriel du portfolio. Image distincte de celle du site : le
# site est un tas de fichiers statiques servis par NGINX, celui-ci est un
# processus Node qui tient des secrets. Les mêler mettrait la clé SMTP dans
# l'image publique du front.
FROM node:24-alpine

ENV NODE_ENV=production

WORKDIR /app

# Couche de dépendances, invalidée par les seuls manifestes.
COPY package*.json ./
RUN npm ci --omit=dev

COPY src ./src

# Ne pas tourner en root : rien ici n'écrit sur le disque.
USER node

EXPOSE 3000

# La sonde interroge le service lui-même : elle prouve que la boucle
# d'événements répond, sans toucher à SMTP ni à Google.
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "src/server.js"]
