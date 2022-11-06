const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log(`Pausando ...`),
  borrar: (id) => console.log(`Borrando cancion ...${id}`),
  crearPlaylist: (nombre) => console.log(`Crando la playlist de ${nombre}`),
  reproducirPalylist: (nombre) =>
    console.log(`Reproduciendo la playlist ${nombre}`),

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist("Rock");
reproductor.reproducirPalylist("Heavy Metal");
