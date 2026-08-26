# Service de courriel du portfolio

Relais entre le formulaire de contact (`src/pages/Contact.vue`), l'inscription à la
newsletter (`src/pages/blog/article.vue`) et une boîte aux lettres. Il vérifie le jeton
reCAPTCHA, limite le débit, puis relaie par SMTP.

## Pourquoi il existe

Le portfolio postait sur `https://api.bask.lu/api/mail`. **Le domaine `bask.lu` a expiré** —
pas seulement le sous-domaine : la zone entière répond NXDOMAIN. Le formulaire échouait donc
en silence côté visiteur (une notification d'erreur, aucun message reçu), et le code source du
service perdu avec lui. Celui-ci le remplace, sur `api.baskewitsch.lu`, un domaine vivant.

Le contrat est repris **à l'identique** : `POST /api/mail`, charge
`{ name, email, message, token }`. Le front n'a pas eu à changer d'appel, seulement d'hôte.

## Contrat

| | |
| --- | --- |
| `POST /api/mail` | `204` sans corps si le message est parti. |
| | `400` charge invalide — motif dans `{ "error": … }`. |
| | `403` origine tierce, ou jeton reCAPTCHA refusé. |
| | `429` débit dépassé, avec `Retry-After`. |
| | `502` Google injoignable, ou SMTP en échec. |
| `GET /health` | `200 {"ok":true}` — ne touche ni à SMTP ni à Google. |

Le client n'apprend jamais **pourquoi** un jeton est refusé : le détail (score, codes
d'erreur de Google) reste au journal.

## Faire tourner

```bash
npm install
cp .env.example .env   # puis remplir
npm test               # 40 tests, ni réseau ni SMTP
npm run dev            # http://localhost:3000
```

Les tests injectent le vérificateur de jeton et l'expéditeur (`creerApp` les prend en
paramètres) : la suite entière tourne sans appeler Google ni ouvrir de connexion SMTP.

## Déployer

```bash
docker compose up -d --build
```

Voir `docker-compose.yml` pour la variante Dokploy, et `.env.example` pour ce que le service
exige au démarrage. Une variable manquante **arrête le conteneur** en la nommant, plutôt que
de laisser le service accepter des requêtes qu'il ne saura pas honorer.

## Ce qu'il ne fait pas

- **Aucune persistance.** Un message qui échoue au SMTP est perdu ; le visiteur voit
  l'erreur et peut réessayer. Une file d'attente serait disproportionnée pour le formulaire
  d'un portfolio.
- **Le limiteur est en mémoire.** Remis à zéro à chaque redéploiement, et non partagé si le
  service tourne un jour en plusieurs exemplaires — c'est écrit dans `src/rate-limit.js`,
  et c'est la note qu'il faudra venir contredire ce jour-là.
- **Aucun envoi n'a encore été reçu depuis la production.** C'est la réserve R1 de
  `docs/plan.md`, et elle ne se referme pas d'ici.
