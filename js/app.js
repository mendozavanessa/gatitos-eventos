// primero que cargue nuestra pagina event = e --> qiuien esta escuchando y donde se esta ejecutando
// quien escucha mi evento es window
// console.log(event); // propiedades del evento
// console.log(event.target); // recibe la carga quien recibe el evento--> donde se ejecuta el evento quien esta escuchando el evento
// console.log(event.currentTarget); // Es el que escucha el evento -->window
window.addEventListener('load', function(event) {
  var text = document.getElementsByTagName('h1')[0];
  var image = document.getElementsByTagName('img')[0];
  text.addEventListener('mouseover', function(event) {
    event.target.textContent = 'Hola otra vez';
    // text.textContent = 'Hola otra vez';
  });
  text.addEventListener('mouseout', function(event) {
    event.target.textContent = 'Hola mundo';
    // text.textContent = 'Hola mundo';
  });
  image.addEventListener('mouseover', function(event) {
    image.src = 'assets/img/gatito1.jpg';
  });
  image.addEventListener('mouseout', function(event) {
    image.src = 'assets/img/gatito2.jpg';
  });
});
