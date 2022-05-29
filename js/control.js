const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const usuario = document.querySelector('#usuario').value;
    const clave = document.querySelector('#clave').value;
    
    
    if(usuario === "" || clave === ""){
        alert('Todos los campos son obligatorios');
    } else {
        alert('Bienvenido ' + usuario);
    }
    
})