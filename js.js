let numero = document.getElementById('numero');


numero.addEventListener("keyup", function(){
    let valor = numero.value;
    if (valor.length == 4 && !valor.includes('.')) {
       valor = valor.split('');
       valor.splice(3, 0, '.')
       string = valor.join('')
       
        console.log(string);
        numero.value = string;
    }
})

