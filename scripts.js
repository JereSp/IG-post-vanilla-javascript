const swiper = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



// api url
const api_url = "https://picsum.photos/v2/list?page=2&limit=50";

// https://picsum.photos/v2/list?page=2&limit=100

// Defining async function
async function getFirstImg(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);

    let contenedor = document.getElementById("image-1")
    let imagen = document.createElement('img')
    contenedor.appendChild(imagen)
    imagen.classList.add("swiper-img")
    imagen.src=`${data[0].download_url}`

    let contenedor2 = document.getElementById("image-2")
    let imagen2 = document.createElement('img')
    contenedor2.appendChild(imagen2)
    imagen2.classList.add("swiper-img")
    imagen2.src=`${data[1].download_url}`

    let contenedor3 = document.getElementById("image-3")
    let imagen3 = document.createElement('img')
    contenedor3.appendChild(imagen3)
    imagen3.classList.add("swiper-img")
    imagen3.src=`${data[4].download_url}`
}

getFirstImg(api_url);


const commentsContainer = document.getElementById("comments-container")
const inputText = document.getElementById("input-text")
const form = document.getElementById("form")
const span = document.createElement("span") 
span.innerText = "Comment "
span.classList.add("comment-bold")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const divFlex = document.createElement("div")
    divFlex.classList.add("comment-container")
    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = "X";
    let text = inputText.value
    if(text !== ""){
        let comentario = document.createElement("p")
        console.log(comentario)
        comentario.appendChild(span)
        comentario.innerHTML += text;
        divFlex.appendChild(comentario)
        divFlex.appendChild(deleteBtn)
        commentsContainer.appendChild(divFlex)
        form.reset()
    } else {
        form.reset()
    }

    deleteBtn.addEventListener("click", () => {
        divFlex.parentNode.removeChild(divFlex)
        deleteBtn.removeEventListener("click")
    })
})


const corazon = document.getElementById("heart")
corazon.addEventListener("click", () => {
    if(corazon.getAttribute("fill") === "none"){
        corazon.setAttribute("fill", "red")
    } 
    else {
        corazon.setAttribute("fill", "none")
    }
})
