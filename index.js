const log4js = require('log4js');


let logger = log4js.getLogger();
logger.level="debug";

logger.info("La aplicación se ejecuto correctamente.");
logger.warn("Cuidado falta un archivo de con figuración");
logger.error("No se encontro la funcion email");
logger.fatal("La aplicación no se pudo iniciar");

function sumar(x, y){
  return x + y;
}

let variable_uno =1;

module.exports = sumar;
