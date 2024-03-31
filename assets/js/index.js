//me base de algunas cosas que enseño abraham y una mezcla de aprendizajes en youtube

//deje un comentario en linea 17 del HTML

//formula valor total
const precio = 400000;
const precioSpan = document.querySelector(".precio-inicial");
const cantidadElemento = document.querySelector(".cantidad");
const valorTotalElemento = document.querySelector(".valor-total");


let cantidad = 0;
let valorTotal = 0;

//boton sumar
document.querySelector("#botonSumar").addEventListener("click", () => {
    cantidad++;
    cantidadElemento.textContent = cantidad;
    valorTotal = cantidad * precio;
    valorTotalElemento.textContent = valorTotal;
});

// boton restar
document.querySelector("#botonRestar").addEventListener("click", () => {
    if (cantidad > 0) {
        cantidad--;
        cantidadElemento.textContent = cantidad;
        valorTotal = cantidad * precio;
        valorTotalElemento.textContent = valorTotal;
    }
});

