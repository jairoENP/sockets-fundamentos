var socket = io();
//Escuchar sucesos
socket.on('connect',function(){
    console.log('conectado al servidor');
})

socket.on('disconnect',function(){
    console.log('perdimos conexión con el servidor');
})

//Enviar informacion
socket.emit('enviarMensaje',{
    usuario: 'Jairo',
    mensaje: 'Hola Mundo'
}, function(resp){
    console.log('respuesta server:',resp);
});

//Escuchar informacion
socket.on('enviarMensaje',function(mensaje){
    console.log('Servidor:', mensaje)
})