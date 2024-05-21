var elementosSinId = document.querySelectorAll('*:not([id])');
                            elementosSinId.forEach(function(elemento, indice) {
                            elemento.id = generarIdUnico();
                            });

function generarIdUnico() {
                                // Generar un timestamp único utilizando Date.now()
const timestamp = Date.now();
                              
                                // Generar un número aleatorio único (entre 0 y 10000)
const numeroAleatorio = Math.floor(Math.random() * 10000);
                              
                                // Concatenar el timestamp y el número aleatorio para obtener un ID único
const idUnico = `${timestamp}_${numeroAleatorio}`;
                              
return idUnico;
}
