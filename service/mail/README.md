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
npm test               # 46 tests, ni réseau ni SMTP
npm run dev            # http://localhost:3000
```

Les tests injectent le vérificateur de jeton et l'expéditeur (`creerApp` les prend en
paramètres) : la suite entière tourne sans appeler Google ni ouvrir de connexion SMTP.

## Par où part le courrier

Le service **n'a pas de compte SMTP à lui**. Il remet ses messages au relais postfix
partagé de la machine — `mailrelay`, le même qui sert Aura — joignable par son nom depuis
`dokploy-network`, sur le port 587, **sans authentification** : le sous-réseau overlay
tombe dans le `mynetworks` du relais. C'est le relais qui s'authentifie auprès d'OVH.

Deux conséquences, et elles expliquent la forme du code :

- `SMTP_USER` et `SMTP_PASSWORD` ne sont **pas** des variables requises. Vides, la clé
  `auth` est *omise* et non vidée — nodemailer tenterait sinon un AUTH que le relais
  refuse. Renseigner **les deux** vise un SMTP classique ; n'en renseigner qu'une arrête le
  démarrage, parce qu'un identifiant oublié ressemblerait sinon à un service qui marche.
- `MAIL_FROM` est une adresse **@bas.lu**, le domaine que le relais a le droit d'émettre —
  et non `baskewitsch.lu`. L'adresse du visiteur reste en `Reply-To`.

`bas.lu` n'a ni DKIM ni DMARC : un message peut arriver en indésirable. C'est une propriété
du domaine, pas du service, et elle ne se corrige pas d'ici.

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
