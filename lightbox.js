const imagenes = document.querySelector('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.image-light')
const hamburger1 = document.querySelector('.hamburger');

/*console.log(image)
console.log(imageLight)
console.log(contenedorLight)*/

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        /*imagen.getAttribute('src');*/
        aparecerImagen(imagen.getAttribute('src'))
        /*imagen.getAttribute('src')
        alert("auch, me dolio XD")*/
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('x-regular-24')
        imagenesLight.classList.toggle('x-regular-24.png')
        hamburger1.style.opacity='1'
    }
})


const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('x-regular-24')
    imagenesLight.classList.toggle('x-regular-24.png')
    hamburger1.style.opacity='0'
}
