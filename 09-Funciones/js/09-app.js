const reproductor = {
  reproductir: function (id) {
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: function (id) {
    console.log(`Pausando canción ${id}`);
  },
  borrar: function (id) {
    console.log(`Borrando canción ${id}`);
  },
  playlist: function (nombre) {
    console.log(`Creando playlist ${nombre}`);
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo playlist ${nombre}`);
  },
};

reproductor.reproductir(30);
reproductor.reproductir(20);
reproductor.pausar(20);
reproductor.playlist('Heavy Metal');
reproductor.playlist('Rock');
reproductor.reproducirPlaylist('Rock');
reproductor.borrar(30);
