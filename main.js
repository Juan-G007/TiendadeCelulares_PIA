/*Scripts para Catalogo*/

/*
function MostrarEspeficificaciones(){
    document.getElementsByClassName('specs-container').style.display = block
}
*/

const nav = document.querySelector('#segundo_white')

    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', this.window.scrollY >0
        )
    })





function MostrarEspecificaciones(element) {
    var specsContainer = element.nextElementSibling; // Accede al siguiente hermano, que es el contenedor de especificaciones

    // Verifica y cambia el estilo de visualización
    if (specsContainer.style.display === "block") {
        specsContainer.style.display = "none";
    } else {
        specsContainer.style.display = "block";
    }
}



 const form = document.querySelector('#form')
 const buttonMailto = document.querySelector('#trucazo')

 form.addEventListener('submit',handleSumbit )

 function handleSumbit(event){
    event.preventDefault()
    const form1 =  new FormData(this)
    console.log(form.get('name'))
    buttonMailto.setAttribute('href', "mailto:ricardomorenomelendez77@gmail.com?subject=${form.get('name')}${form.get('email')}&body={form.get('message')}")
    buttonMailto.click()
 }
















/*
function showSpecifications(cellularNumber) {
    var specsContainer = document.getElementById("specs-container-" + cellularNumber);
    var specsList = document.getElementById("specs-list-" + cellularNumber);
    
    specsList.innerHTML = "";

    

    
    
    switch (cellularNumber) {
    case 1:
    var specifications = [
    "Sistema operativo  iOS",
    "Tamaño de la pantalla  6,7 Pulgadas",
    "Color  Titanio azul",
    "Almacenamiento: 256 GB"
    ];
     break;
    
     case 2:
    var specifications = [
    "Sistema operativo  iOS",
    "Tamaño de la pantalla  6,7 Pulgadas",
    "Color  Morado Oscuro",
    "Almacenamiento: 512 GB"
    ];
    break;
    
    case 3:
    var specifications = [
    "Sistema operativo  iOS",
    "Tamaño de la pantalla  6,7 Pulgadas",
    "Color  Grafito",
    "Almacenamiento: 256 GB"
    ];
    break;
    
    case 4:
    var specifications = [
    "Sistema operativo  iOS",
    "Tamaño de la pantalla  6,7 Pulgadas",
    "Color  Grafito",
    "Almacenamiento: 128 GB"
    ];
    break;
    
    case 5:
    var specifications = [
    "Dos micrófonos con tecnología beamforming",
    "Dos sensores ópticos",
    "Acelerómetro con detección de movimiento",
    "Acelerómetro con detección de voz"
    ];
    break;
    
    case 6:
    var specifications = [
    "Dos micrófonos con tecnología beamforming",
    "Sensor de fuerza",
    "Acelerómetro detector de movimiento",
    "Acelerómetro detector de voz"
    ];
    break;
    
    case 7:
    var specifications = [
    "Dos micrófonos con tecnología beamforming",
    "Micrófono orientado hacia adentro",
    "Acelerómetro con detección de movimiento",
    "Control táctil"
    ];
    break;
    
    default:
    var specifications = ["Especificaciones no disponibles"];
    break;
    
        }
    
    for (var i = 0; i < specifications.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = specifications[i];
    specsList.appendChild(listItem);
    }
    specsContainer.style.display = "block";
    }


    */