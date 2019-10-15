
function verificar(control, max, progressText) {
    //alert(control.value)
    let comment = control.value.length;
    if(comment > max){
        control.value = control.value.substring(0, max);
        comment = control.value.length
    }
    progressText.innerHTML = "<h5> ( Caracteres Máximos: " + max + ") </h5> <h5> Usted tiene un espacio de " + (max - comment) + " caracteres restantes </h5> " 
}

