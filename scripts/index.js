
let modal=document.querySelector('.modal');
let modalTarjeta=document.querySelector('#modal-tarjeta')
let modalImagen=document.querySelector('#modal-imagen')

let botonEditar=document.querySelector('.profile__info-button');
let botonCerrar=document.querySelector('.modal__button-close');
let botonCerrarTarjeta=document.querySelector('#modal__button-close-tarjeta')
let botonCerrarImagen=document.querySelector('#modal__button-imagen');
let botonGuardar=document.querySelector('.modal__button-guardar');
let botonTarjeta=document.querySelector('.modal__button-tarjeta');
const botonAgregar=document.querySelector('.profile__addButton');

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    description:"Imagen del Valle de Yosemite"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    description:"Imagen del Lago Louise"
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    description:"Imagen de las montañas calvas"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    description:"Imagen de Latemar"
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    description:"Imagen del Parque Nacional de la Vanoise"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    description:"Imagen del Lago di Braires"
  }
];



let nombre=document.querySelector('#nombre');
let acerca=document.querySelector('#acerca');
let titulo=document.querySelector('#titulo');
let imagen=document.querySelector('#imagen');

const contenedorTarjeta= document.querySelector('.elements');

//Tarjetas iniciales
initialCards.forEach((tarjeta)=>{
    let templateTarjeta= document.querySelector('.tarjeta-template').content;
    const tarjetaNueva= templateTarjeta.cloneNode(true);
    const imagenTarjeta=tarjetaNueva.querySelector('.element__image');
    imagenTarjeta.setAttribute('src', tarjeta.link)
    imagenTarjeta.setAttribute('alt', tarjeta.description)
    const textoTarjeta=tarjetaNueva.querySelector(".element__container-text");
    const tituloTarjeta=tarjeta.name;
    textoTarjeta.textContent=tituloTarjeta;
    
    contenedorTarjeta.append(tarjetaNueva)
    
})

//Tarjetas que se agregan
botonTarjeta.addEventListener('click', ()=>{
    let templateTarjeta= document.querySelector('.tarjeta-template').content;
    const tarjetaNueva= templateTarjeta.cloneNode(true);
    const imagenTarjeta=tarjetaNueva.querySelector('.element__image');
    imagenTarjeta.setAttribute('src', imagen.value)
    const textoTarjeta=tarjetaNueva.querySelector(".element__container-text");
    const tituloTarjeta=titulo.value;
    textoTarjeta.textContent=tituloTarjeta;


    //Añado los event listener de la tarjeta

    imagenTarjeta.addEventListener('click', ()=>{
        const linkImagen = imagenTarjeta.getAttribute('src');
        const modalImg = document.querySelector('.modal__imagen');
        modalImg.setAttribute('src', linkImagen);
        const textoImagen = document.querySelector('.modal__texto');
        textoImagen.textContent = textoTarjeta.textContent;
        modalImagen.classList.add('modal__abierto');
    })

    const botonMeGusta = tarjetaNueva.querySelector('.element__container-like-img');
    botonMeGusta.addEventListener('click', meGusta);

    contenedorTarjeta.prepend(tarjetaNueva);
    imagen.value="";
    titulo.value="";
    cerrarModal(modalTarjeta);
    

})

//Variables de las tarjetas imagen y me gusta
let elementImg=document.querySelectorAll('.element__image');
let botonesMegusta=document.querySelectorAll('.element__container-like-img');

//Boton borrar
contenedorTarjeta.addEventListener('click',(evento)=>{
    if(evento.target.classList.contains('element__delete-button')){
        const tarjeta= evento.target.closest('.element');
        if(tarjeta){
            tarjeta.remove()
        }
    }
})





function meGusta(event){
    let boton = event.target;
    let estaActivo = boton.classList.toggle('activo');

    if (estaActivo) {
        boton.src = './images/MegustaActivo.svg';
    } else {
        boton.src = './images/MeGusta.svg';
    }
}

botonesMegusta.forEach(function(boton) {
    boton.addEventListener('click', meGusta);
});


function changeColor(){
   
    if(nombre.value.trim() !=="" && acerca.value.trim() !==""){
        botonGuardar.classList.add('modal__button__activo')
        botonGuardar.disabled= false;
    }else{
        botonGuardar.classList.remove('modal__button__activo');
        botonGuardar.disabled=true;
        
    }
}



nombre.addEventListener('input', changeColor)
acerca.addEventListener('input', changeColor)

function changeColorCard(){
   
    if(titulo.value.trim() !=="" && imagen.value.trim() !==""){
        botonTarjeta.classList.add('modal__button__activo')
        botonTarjeta.disabled= false;
    }else{
        botonTarjeta.classList.remove('modal__button__activo');
        botonTarjeta.disabled=true;
        
    }
}

titulo.addEventListener('input', changeColorCard)
imagen.addEventListener('input', changeColorCard)

function guardar(){
    let nombre=document.getElementById('nombre').value;
    let acercaDe=document.getElementById('acerca').value;

    let titulo=document.querySelector('.profile__info-name');
    let info=document.querySelector('.profile__info-subtitle');
    titulo.textContent= nombre;
    info.textContent= acercaDe;
    cerrarModal(modal);

}






function Abrirmodal(modalElegido){
    modalElegido.classList.add('modal__abierto');
}


function cerrarModal(modalElegido){
    modalElegido.classList.remove('modal__abierto')
}





botonAgregar.addEventListener('click',()=> Abrirmodal(modalTarjeta))
botonCerrarTarjeta.addEventListener('click', ()=>cerrarModal(modalTarjeta))



botonEditar.addEventListener('click',()=> Abrirmodal(modal))
botonCerrar.addEventListener('click', ()=>cerrarModal(modal))


botonGuardar.addEventListener('click', guardar)

elementImg.forEach((elemento)=>{
    elemento.addEventListener('click', ()=>{
        const linkImagen=elemento.getAttribute('src');
        const imagen=document.querySelector('.modal__imagen');
        imagen.setAttribute('src', linkImagen)
        const tarjetaSeleccionada= elemento.closest('.element')
        const textoEnTarjeta= tarjetaSeleccionada.querySelector('.element__container-text')
        const textoImagen=document.querySelector('.modal__texto');
        textoImagen.textContent=textoEnTarjeta.textContent;
        modalImagen.classList.add('modal__abierto')
    }
    )
})

botonCerrarImagen.addEventListener('click',()=>cerrarModal(modalImagen))

