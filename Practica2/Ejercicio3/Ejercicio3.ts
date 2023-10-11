
type libroo={
    id:number,
    title:string,
    author:string,
    pages:number,
    genre:string;
}

const libros: libroo[] = [];

let num;

let titulo
let id
let paginas 
let autor
let genero

let numero

function crearlibro() {  

    id = prompt("Introduce el id del libro: ");
    titulo = prompt("Introduce titulo del libro: ");
    autor = prompt("Introduce autor del libro :");
    paginas = prompt("Introduce las páginas del libro: ");
    genero = prompt("Introduce género del libro: ");
  
    libros.push({
        id: id,
        title: titulo,
        author: autor,
        pages: paginas,
        genre: genero,
      });
}

 export const biblioteca = () =>{

    do {

        console.log("1 - Crear libro");
        console.log("2 - Filtrar libro por género");
        console.log("3 - Borrar libro");
        console.log("4 - Salir");
    
        num = prompt("Introduce un numero");
        numero = parseFloat(num);
    
        if(numero===1){
    
           crearlibro();
    
        }else if(numero===2){
    
            let genero = prompt("Introduce el género de los libros que quieres filtrar:");
    
            const librosFiltrados = libros.filter((libroo) => libroo.genero === genero);
    
            librosFiltrados.forEach((libro) => console.log(libro));
    
        }else if(numero===3){
           
            let id = prompt("Introduce id del libro que deseas borrar:");
            let nb = parseFloat(id);
    
            //Ahora hacemos un find para buscar si el id existe y despues con la funcion splice, lo terminamos eliminando

            const libro = libros.find((libroo) => libroo.id === nb);
            libros.splice(libros.indexOf(libro), 1);
    
        }
        
      } while (numero!==4);

 }

 biblioteca()
