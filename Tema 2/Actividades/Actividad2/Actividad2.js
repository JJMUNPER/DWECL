function alerta() {
  var mensaje;
  var opcion = prompt("¿Numero de hijos?:", "2");

  if (opcion == null || opcion == "") {
    mensaje = "No has introducido el numero de hijos";
  } else {
    mensaje = "Numero de descendientes " + opcion;
  }
  alert(mensaje);
}
/** Comentario
 * de un tipo
 */

// El otro tipo de comentario