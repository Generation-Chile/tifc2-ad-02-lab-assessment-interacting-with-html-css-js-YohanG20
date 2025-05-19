
const primerHolaMundo = document.getElementById('rojo');
primerHolaMundo.textContent = 'Adiós';


const segundoHolaMundo = document.querySelector('h1:nth-child(3)'); 
segundoHolaMundo.style.color = 'orange';


nuevoEncabezado.textContent = 'Haz clic aquí';
document.body.appendChild(nuevoEncabezado);

nuevoEncabezado.addEventListener('click', function() {
    nuevoEncabezado.style.color = 'brown';
});