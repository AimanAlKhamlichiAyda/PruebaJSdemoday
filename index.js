

//1.Escribe una función que acepte un hobbie y lo añada a la lista de hobbies de nuestro megaTeacher.
/*const megaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
		street: "Gran Vía",
		number: 73,
		floor: 4
	},
	hobbies: ["basketball", "coding", "music", "reading"],
	books: ["Lord of the Flies", "Books of Blood"],
	films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
	height: 1.98
}
function addHobby() {
	megaTeacher.hobbies.push("surfing");
	return(`Se ha añadido a la lista de hobbies de ${megaTeacher.surfing}. Nuevos hobbies: ${megaTeacher.hobbies}`);
}
console.log(addHobby());*/
// utilizo una funcion haciendo que con el metodo push añada el hobbie que quiera luego pongo un Log llamando a el que he añadido mas los que ya estaban y fuera llamo a la funcion

//============================================================================================================================================

//2.Escribe un método introduceMySelf dentro del objeto que devuelva el siguiente string: "Hola, me llamo <name> <lastname>, tengo [age] años y vivo en la calle <street>, <number>. Mis hobbies son: <hobbie>, <hobbie>, <hobbie> (etc.)".
/*
const megaaaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
		street: "Gran Vía",
		number: 73,
		floor: 4
	},
	hobbies: ["basketball", "coding", "music", "reading"],
	books: ["Lord of the Flies", "Books of Blood"],
	films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
	height: 1.98,

	introduceMyself: function () {
		const hobbiesStr = this.hobbies.join(", ");
		return `Hola, me llamo ${this.name} ${this.lastname}, tengo ${this.age} años y vivo en la calle ${this.address.street}, ${this.address.number}. Mis hobbies son: ${hobbiesStr}.`;
	}

};
console.log(megaaaTeacher.introduceMyself());*/

// utilizo el metodo introduceMyself luego llamo a todos los datos del megaaaTeacher y utilizo el join para añadir una coma y un espacio a los hobys

//============================================================================================================================================

//3.Modifica la primera función: debe aceptar un array de nuevos hobbies, y se lo añadirá a los hobbies del objeto hasta que éstos últimos sean 8, no más. Ejemplo:
/*const megaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
		street: "Gran Vía",
		number: 73,
		floor: 4
	},
	hobbies: ["basketball", "coding", "music", "reading"],
    books: ["Lord of the Flies", "Books of Blood"],
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts" ],
	height: 1.98
}
function addHobbies(newHobbies) {
	const maxHobbies = 8;
	const currentHobbiesCount = megaTeacher.hobbies.length;
	const availableSlots = maxHobbies - currentHobbiesCount;
	
	if (availableSlots <= 0) {
	  console.log("No se pueden agregar más hobbies");
	  return;
	}
  
	const newHobbiesCount = Math.min(availableSlots, newHobbies.length);
	const hobbiesToAdd = newHobbies.slice(0, newHobbiesCount);
  
	megaTeacher.hobbies.push(...hobbiesToAdd);
  
	console.log(`Se han agregado ${newHobbiesCount} nuevos hobbies: ${hobbiesToAdd.join(", ")}`);
  }
 console.log(addHobbies(["swimming", "dancing", "surfing"]));
 */
//utilizo una funcion con parametro newHobbies para meter los nuevos hobbys luego la funcion verifica si ahi espacio para los hoby y me los muestra en pantalla si no ahi espacio me pone error

//4.Escribe un método que te permita modificar los datos personales.
/*const megaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
		street: "Gran Vía",
		number: 73,
		floor: 4
	},
	hobbies: ["basketball", "coding", "music", "reading"],
    books: ["Lord of the Flies", "Books of Blood"],
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts" ],
	height: 1.98,
	
	modifyPersonalData: function(newData) {
		for (const property in newData) {
			if (property in this) {
				this[property] = newData[property];
			}
		}
		console.log("Datos personales actualizados:", this);
	}
};

megaTeacher.modifyPersonalData({
	age: 28,
	vegan: true,
	address: {
		floor: 5
	},
	hobbies: ["swimming", "hiking"]
});
*/
//utilizo un metodo para darle on objeto newData con los datos personales luego un bucle para verificar que existe el dato y meter los datos

//5.Escribe un método que te permita modificar la dirección.
/*const megaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
		street: "Gran Vía",
		number: 73,
		floor: 4
	},
	hobbies: ["basketball", "coding", "music", "reading"],
    books: ["Lord of the Flies", "Books of Blood"],
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts" ],
	height: 1.98,
	
	modifyAddress: function(newAddress) {
		this.address = { ...this.address, ...newAddress };
		console.log("La dirección se ha modificado correctamente:", this.address);
	}
};
console.log(megaTeacher);
megaTeacher.modifyAddress({ street: "Calle Mayor", number: 10, floor: 2 });
*/
//console.log(megaTeacher.modifyAddress({ street: "Calle Mayor", number: 10, floor: 2 }));
//modifyAddress recibe un objeto newAddress que se fusiona con el objeto address actual del objeto megaTeacher utilizando el operador spread .... Luego se imprime un mensaje de éxito en la consola con la nueva dirección actualizada.

//6.Modifica el metodo anterior para poder añadir una segunda dirección.
/*const megaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
	  street: "Gran Vía",
	  number: 73,
	  floor: 4,
	  secondAddress: {
		street: "",
		number: "",
		floor: ""
	  }
	},
	hobbies: ["basketball", "coding", "music", "reading"],
	books: ["Lord of the Flies", "Books of Blood"],
	films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts" ],
	height: 1.98,
  
	modifyAddress: function(newAddress, secondAddress) {
	  this.address = { ...this.address, ...newAddress };
	  if (secondAddress) {
		this.address.secondAddress = { ...this.address.secondAddress, ...secondAddress };
	  }
	  console.log("La dirección se ha modificado correctamente:", this.address);
	}
  }
  megaTeacher.modifyAddress({ 
	street: "Calle Nueva", 
	number: 123, 
	floor: 2 
  }, { 
	street: "Avenida Principal", 
	number: 456, 
	floor: 1 
  });
  
  // el método modifyAddress recibe dos argumentos: newAddress y secondAddress. El objeto address se actualiza con los valores de newAddress mediante el operador spread (...), mientras que secondAddress se añade como un objeto anidado dentro de address.Si secondAddress se proporciona, se actualizan sus propiedades dentro del objeto secondAddress
*/

//7.Escribe un método que en el array de libros, verifique si un libro existe en el array. Si existe, imprima el libro en mayusculas. Si no existe agregar a la lista de libros.
/*const megaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
	  street: "Gran Vía",
	  number: 73,
	  floor: 4
	},
	hobbies: ["basketball", "coding", "music", "reading"],
	books: ["Lord of the Flies", "Books of Blood"],
	films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts"],
	height: 1.98,
  
	checkBook: function (film) {
	  const bookIndex = this.films.indexOf(film);
	  console.log(bookIndex);
	  if (bookIndex !== -1) {
		console.log(film.toUpperCase());
	  } else {
		this.films.push(film);
		console.log(`El libro ${film} ha sido agregado.`);
	  }
	}
  };
  megaTeacher.checkBook("Die Hard ");
  //si pongo libro que ya ahi m sale en mayusculas
*/
//8.Escribe una función que te permita añadir películas. Y si no tiene parámetro de entrada te retorne la película de en medio.
/*const megaTeacher = {
	name: "Pablo",
	lastname: "Quintana",
	age: 27,
	vegan: false,
	address: {
		street: "Gran Vía",
		number: 73,
		floor: 4
	},
	hobbies: ["basketball", "coding", "music", "reading"],
    books: ["Lord of the Flies", "Books of Blood"],
    films: ["Lord of the Rings", "Die Hard", "Fantastic Beasts" ],
	height: 1.98
}
function addOrGetMiddleFilm(film) {
	if (film) {
	  megaTeacher.addFilm(film);
	} else {
	  const filmsLength = megaTeacher.films.length;
	  if (filmsLength % 2 === 0) {
		const midIndex1 = filmsLength / 2 - 1;
		const midIndex2 = filmsLength / 2;
		return [megaTeacher.films[midIndex1], megaTeacher.films[midIndex2]];
	  } else {
		const midIndex = Math.floor(filmsLength / 2);
		return megaTeacher.films[midIndex];
	  }
	}
  }
  
 console.log(addOrGetMiddleFilm["Avengers: Endgame"]); 
console.log(addOrGetMiddleFilm());*/
//////////////////////////////////////////////////////////////////
























