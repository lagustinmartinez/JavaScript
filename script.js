for (let i = 1; i <= 1; i++){

let nombre = prompt("ingrese su nombre: ");

if(nombre !="") //&& ((nombre == "Agus") || (nombre == "agus"))
{ 
    alert("Bienvenido" + nombre + "." +"\nCliente N°:" +  i );

}else{ 
    alert("Error: No ingresaste un nombre");
 } 

let edad = parseInt(prompt("Ingrese su edad:"))

if (edad >= 18){
    alert("Estas apto para realizar la compra!")
}
else{
    alert("Necesitas pedirle a un adulto que realice la compra!")
}



 function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
 }

 const productoA = new Producto("Carne Vacuna", 1600, 100)
 const productoB = new Producto("Pollo", 680, 25)
 const productoC = new Producto("Animales de Granja", 7000, 20)

/*  
    let nombreCarneVacuna = "carne Vacuna"
    let precioCarneVacuna = 1600
    let stockCarneVacuna = 100

    let nombrePollo = "Pollo"
    let precioPollo = 680
    let stockPollo = 250

    let nombreAnimalesDeGranja = "Animales de Granja"
    let precioAnimalesDeGranja = 7000
    let stockAnimalesDeGranja = 20
    
*/

let cantidadCompras = prompt("Ingrese la cantidad de productos que quiere comprar: \n- Carne Vacuna\n- Pollo\n- Animales de Granja ")

let precioTotal = " ";

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio 
}

function calculoStock(cantidad, precio, stock){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("El total es de: $" + (cantidad * precio))
    }
    else{
        alert("La cantidad solicitada es mayor al stock. El stock es de: " + stock + " unidades")
    }
}

function sumaIva(precio){
    return precio * 1.21
}

for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("Ingrese el producto que quiere comprar: \n- Carne Vacuna\n- Pollo\n- Animales de Granja")
    let cantidad1 = prompt("Ingrese la cantidad que necesita:")
        
    
    if(compra1 == "Carne Vacuna"){
        calculoStock(cantidad1, productoA, precio)
            
    }
    else if(compra1 == "Pollo"){
        calculoStock(cantidad1, stockproductoB, precioproductoB)
    
    }
    else if(compra1 == "Animales de Granja"){
        calculoStock(cantidad1, stockproductoC, precioproductoC)
    }
    
    else{
        alert("no tenemos ese producto")
    } 
}    



//let precioTotalConImpuestos = sumaIva(precioTotal)

alert("Este es el precio total de tu compra" + precioTotal)

}