const { servicio_adicional } = require('./array');  

// Ciclo forEach
console.log("Ciclo forEach");
servicio_adicional.forEach(({ id_local, id_servicio, nombre, descripcion, precio_adicional }, elpepe) => {
    console.log(`Elemento ${elpepe + 1}:
    id_local: ${id_local},
    id_servicio: ${id_servicio},
    nombre: ${nombre},
    descripcion: ${descripcion},
    precio_adicional: ${precio_adicional}`);
});

// Ciclo for in
console.log("Ciclo for in");
for (let elpepe in servicio_adicional) {
    const { id_local, id_servicio, nombre, descripcion, precio_adicional } = servicio_adicional[elpepe];
    console.log(`Elemento ${parseInt(elpepe) + 1}:
    id_local: ${id_local},
    id_servicio: ${id_servicio},
    nombre: ${nombre},
    descripcion: ${descripcion},
    precio_adicional: ${precio_adicional}`);
}

// Ciclo for of
console.log("Ciclo for of");
let elpepe = 1;
for (const { id_local, id_servicio, nombre, descripcion, precio_adicional } of servicio_adicional) {
    console.log(`Elemento ${elpepe}:
    id_local: ${id_local},
    id_servicio: ${id_servicio},
    nombre: ${nombre},
    descripcion: ${descripcion},
    precio_adicional: ${precio_adicional}`);
    elpepe++;
}
