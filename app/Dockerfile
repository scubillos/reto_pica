# Imagen de NodeJS
FROM node:19-alpine

# Establecer directorio de trabajo
WORKDIR /var/www/html/app
COPY package*.json ./
COPY . .

RUN npm install
EXPOSE 3000

# Ejecutar archivo principal sh de arranque
CMD [ "node","./bin/www" ]