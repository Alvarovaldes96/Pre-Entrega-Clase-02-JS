// Simulador de Mantenimiento de Auto

alert("¡Bienvenido al simulador de mantenimiento!");
console.log("Simulador iniciado");

let continuar = true;

while (continuar) {
    let kilometros = parseInt(prompt("¿Cuántos km tiene tu auto?"));
    console.log("Kilómetros ingresados: " + kilometros + " km");
    
    if (kilometros <= 50000) {
        alert("Mantenimiento básico: aceite y filtros.");
        console.log("Resultado: mantenimiento básico");
    } else if (kilometros > 50000 && kilometros <= 100000) {
        alert("Mantenimiento intermedio: kit distribución y bomba de agua.");
        console.log("Resultado: mantenimiento intermedio");
    } else if (kilometros > 100000 && kilometros <= 150000) {
        alert("Mantenimiento avanzado: revisión completa del motor.");
        console.log("Resultado: mantenimiento avanzado");
    } else if (kilometros > 150000 && kilometros <= 200000) {
        alert("Mantenimiento especial: rotación de neumáticos, alineación y balanceo.");
        console.log("Resultado: mantenimiento especial");
    } else {
        alert("Mantenimiento completo: revisión general del auto.");
        console.log("Resultado: mantenimiento completo");
    }
    
    let opcion = prompt("Conocé el precio del tipo de mantenimiento:\n1 - Básico\n2 - Intermedio\n3 - Avanzado\n4 - Especial\n5 - Completo\n6 - Salir");
    console.log("Opción elegida: " + opcion);
    switch (opcion) {
        case "1": alert("El precio del mantenimiento básico es de $5000.");
        console.log("Precio mantenimiento básico: $5000");
        break;
        case "2": alert("El precio del mantenimiento intermedio es de $10000.");
        console.log("Precio mantenimiento intermedio: $10000");
        break;
        case "3": alert("El precio del mantenimiento avanzado es de $15000.");
        console.log("Precio mantenimiento avanzado: $15000");
        break;
        case "4": alert("El precio del mantenimiento especial es de $20000.");
        console.log("Precio mantenimiento especial: $20000");
        break;
        case "5": alert("El precio del mantenimiento completo es de $25000.");
        console.log("Precio mantenimiento completo: $25000");
        break;
        case "6": continuar = false;
        console.log("El usuario eligió salir");
        break;
        default: alert("Opción no válida.");
        console.log("Opción no válida: " + opcion);
    }

    continuar = confirm("¿Desea continuar con el simulador?");
    console.log("Continuar con el simulador: " + continuar);
}

alert("¡Gracias por usar el simulador!");
console.log("Simulador finalizado");