class Usuario {
      constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        this.nombresADevolver = [];
        this.mascotasADevolver = [];
      }
    
      getFullName() {
        return console.log(
          `El empleado se llama ${this.nombre} ${this.apellido}`
        );
      }
      addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
      }
      countMascotas() {
        return console.log(`La cantidad de mascotas es ${this.mascotas.length}`);
      }
      addBook(libro) {
        this.libros.push(libro);
      }
      getBookNames() {
        this.libros.forEach((libro) => {
          this.nombresADevolver.push(libro.nombre);
        });
    
        console.log(this.nombresADevolver);
      }

      getMascotasNames() {
        this.mascotas.forEach((mascota) => {
          this.mascotasADevolver.push(mascota);
        });
    
        console.log(this.mascotasADevolver);
      }
    }
    
    let newUser = new Usuario(
      'Braian',
      'Hercun',
      [
        { nombre: 'Los ojos del perro siberiano', Autor: 'Antonio Santa Ana' },
        { nombre: 'Padre rico, padre pobre', Autor: 'Robert Kiyosaki' },
      ],
      ['Perro', 'Conejo']
    );
    
    newUser.getFullName();
    
    newUser.addMascota('Gato');
    
    newUser.countMascotas();
    
    newUser.addBook({ nombre: 'Perros de nadie', Autor: 'Esteban Valentino' });
    
    newUser.getBookNames();

    newUser.getMascotasNames();
    