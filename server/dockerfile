# Usa un'immagine di Node.js come base
FROM node:14

# Imposta la directory di lavoro all'interno del container
WORKDIR /usr/src/app

# Copia i file del tuo progetto nella directory di lavoro
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il codice sorgente nell'immagine Docker
COPY . .

# Espone la porta del tuo server Express
EXPOSE 3000

# Avvia l'applicazione quando il container viene eseguito
CMD ["npm", "start"]
