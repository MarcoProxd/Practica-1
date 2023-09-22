const servicio_adicional = [
    {
        id_local: 1,
        id_servicio: 1,
        nombre: "Annel",
        descripcion: "Evento de fiestas sala 10",
        precio_adicional: 250.00
    },
    {
        id_local: 2,
        id_servicio: 2,
        nombre: "Jorge el curioso",
        descripcion: "Evento de fiestas sala 11",
        precio_adicional: 180.00
    },
    {
        id_local: 3,
        id_servicio: 3,
        nombre: "Manuel",
        descripcion: "Evento de fiestas sala 12",
        precio_adicional: 150.00
    },
    {
        id_local: 4,
        id_servicio: 4,
        nombre: "Marco",
        descripcion: "Evento de fiestas sala 13",
        precio_adicional: 200.00
    },
    {
        id_local: 5,
        id_servicio: 5,
        nombre: "Ivana",
        descripcion: "Evento de fiestas sala 14",
        precio_adicional: 350.00
    }
];

const buscarServicio = (id_local, arreglo, callback) => {
    const servicioEncontrado = arreglo.find((elemento) => {
        return elemento.id_local === id_local;
    });

    if (servicioEncontrado) {
        callback(null, servicioEncontrado);
    } else {
        callback("No pudimos encontrar el idservicio");
    }
};

module.exports = {
    buscarServicio,
    servicio_adicional
}; //a
