const barra2 = document.querySelector("#barra2");
const abrirMenu = document.querySelector("#abrirMenu");
const cerrarMenu = document.querySelector("#cerrarMenu");

abrirMenu.addEventListener("click", () => {
    barra2.classList.add("visible") 
    
})

cerrarMenu.addEventListener("click", () => {
    barra2.classList.remove("visible")
    
})



function captura(){
    
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var email=document.getElementById("email").value
    var numTel=document.getElementById("numTel").value;
    var fechaNacimiento=document.getElementById("fechaNacimiento").value
    var resibir=document.getElementById("resibir").value
    var password=document.getElementById("password").value

    console.log(nombre+" "+apellido ,email , numTel,resibir +"\n"+password);
    alert("El nuevo usuario es: "+ nombre + " "+apellido +"\n email: "+ email + ", num de tel: "+numTel +"\n Fecha de nacimiento= "+fechaNacimiento);
    
}

function ingreso(){
    var usuario=document.getElementById("usuario").value
    var password=document.getElementById("password").value
    console.log(usuario+" \ " + password)
    alert("Vienvenido "+usuario )

}


