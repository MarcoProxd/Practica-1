const { buscarServicio } = require("./array");

const { servicio_adicional } = require("./array");

buscarServicio(3, servicio_adicional, (error, servicio_adicional) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Servicio encontrado:', servicio_adicional);
  }
});
