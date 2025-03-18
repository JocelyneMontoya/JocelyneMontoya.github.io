//Permite que el texto tenga efecto maquina de escribir 
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
    
});
typewriter
    .pauseFor(100)
    .deleteAll()
    .typeString('¡Bienvenidas a FEMEFORCE!')
    .pauseFor(2500)
    // número de Caracteres que se borrarán
    .deleteChars(6)
    .start();

var typewriter1 = new Typewriter('#text', {
    loop: true,
    delay: 75,
    autoStart: true, 
});

typewriter1
    .pauseFor(1000) // Espera antes de iniciar
    .deleteAll()
    .typeString('Welcome Girls')
    .pauseFor(2500)
    .deleteChars(6)
    .start();