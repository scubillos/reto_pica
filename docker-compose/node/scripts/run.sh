echo ".:Archiplus:."
echo "-------------"
echo ">> Ambiente de Desarrollo NodeJS (ExpressJS)."

# Se definen las variables
NODE_MODULES_DIR="node_modules"
WORKDIR="/var/www/html/app"

# Ingresar al directorio del proyecto
cd $WORKDIR

if [ -d "$NODE_MODULES_DIR" ]; then
	# Si el directorio node_modules existe se limpia únicamente caché
  echo " > Limpiando caché de proyecto."
	npm cache clean --force  
else
	echo " > Instalando dependencias de node."
	npm install
fi

echo ">> Ambiente Iniciado Correctamente."
npm start