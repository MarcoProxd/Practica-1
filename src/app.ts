interface Servicio {
  id_local: number;
  id_servicio: number;
  nombre: string;
  descripcion: string;
  precio_adicional: number;
}

const servicio_adicional: Servicio[] = [
  {
    id_local: 1,
    id_servicio: 1,
    nombre: "Annel",
    descripcion: "Evento de fiestas sala 10",
    precio_adicional: 250.00,
  },
  {
    id_local: 2,
    id_servicio: 2,
    nombre: "Jorge el curioso",
    descripcion: "Evento de fiestas sala 11",
    precio_adicional: 180.00,
  },
  {
    id_local: 3,
    id_servicio: 3,
    nombre: "Manuel",
    descripcion: "Evento de fiestas sala 12",
    precio_adicional: 150.00,
  },
  {
    id_local: 4,
    id_servicio: 4,
    nombre: "Marco",
    descripcion: "Evento de fiestas sala 13",
    precio_adicional: 200.00,
  },
  {
    id_local: 5,
    id_servicio: 5,
    nombre: "Ivana",
    descripcion: "Evento de fiestas sala 14",
    precio_adicional: 350.00,
  },
];

function displayServicesWithForEach(): void {
  console.log('Recorriendo con forEach:');
  servicio_adicional.forEach((servicio, index) => {
    console.log(`[${index}] id_local: ${servicio.id_local}, id_servicio: ${servicio.id_servicio}, nombre: ${servicio.nombre}, descripcion: ${servicio.descripcion}, precio_adicional: ${servicio.precio_adicional}`);
  });
}

function displayServicesWithForIn(): void {
  console.log('Recorriendo con for in:');
  for (const index in servicio_adicional) {
    const servicio = servicio_adicional[index];
    console.log(`[${index}] id_local: ${servicio.id_local}, id_servicio: ${servicio.id_servicio}, nombre: ${servicio.nombre}, descripcion: ${servicio.descripcion}, precio_adicional: ${servicio.precio_adicional}`);
  }
}

function displayServicesWithForOf(): void {
  console.log('Recorriendo con for of:');
  let index = 0;
  for (const servicio of servicio_adicional) {
    console.log(`[${index}] id_local: ${servicio.id_local}, id_servicio: ${servicio.id_servicio}, nombre: ${servicio.nombre}, descripcion: ${servicio.descripcion}, precio_adicional: ${servicio.precio_adicional}`);
    index++;
  }
}

displayServicesWithForEach();
displayServicesWithForIn();
displayServicesWithForOf();
