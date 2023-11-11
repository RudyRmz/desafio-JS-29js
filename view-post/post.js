const URL_FIREBASE= "https://javascript29js-default-rtdb.firebaseio.com/devto"

let queryString = location.search
console.log(queryString)

let params = new URLSearchParams(queryString)
console.log(params)

let postId = params.get("postId")
console.log(postId)

const getPostById = async (idPost) =>{
    let reponse = await fetch(`${URL_FIREBASE}/${idPost}/.json`)
    let data = await reponse.json();

    // let {date, description, tags, title, url, reactions, key} = data;

    if (data){
        let {date, description, tags, title, url, reactions, key} = data;
        document.getElementById("head-title").textContent = title;
        document.getElementById("post-cover").src = url
        document.getElementById("date-post").textContent = `Posted on ${date}`
        document.getElementById("post-title").textContent = title
        document.getElementById("post-description").textContent = description
    }
    // else {
    //     document.getElementById("detail-wrapper").innerHTML = `
    //     <div class="alert alert-secondary" role="alert">
    //   No se encontró el contenido de esta entrada
    // </div>
    // <img class="w-100" src="https://thumbs.dreamstime.com/z/page-not-found-error-hand-drawn-vector-doodle-illustration-internet-connection-problem-concept-cat-holds-computer-mouse-119417440.jpg" alt="" />
    //     `;
    //   }
}

getPostById(postId)

// const URL_FIREBASE= "https://javascript29js-default-rtdb.firebaseio.com/devto/.json"

// let sectionCards =  document.getElementById("section_cards")

// const getAllPosts = async ()=>{
//     let reponse  =  fetch(URL_FIREBASE)
//     let data = await reponse.json()
//     console.log(data)
//     return data
// }

// const search = window.location.search
// //console.log(search);
// const url = new URLSearchParams(search)
// const ID_POST = url.get('id');

// const postImg = document.querySelector('#post-cover')
// const postTitle = document.querySelector('#post-title');
// const postDescription = document.querySelector('#post-description');

// const buttonEdit = document.querySelector('#buttonEdit')

//buttonEdit.dataset.post = ID_POST

//const sectionContainer = document.querySelector('#section-Container');

// const renderPost = (cardInfo) => {
//     const cardDiv = document.createElement('div');
//     const coverImg = document.createElement('img');
//     const sectionFisrt = document.createElement('section');
//     const divButton = document.createElement('div');
//     const buttonEdit = document.createElement('button');
//     const divCardBody = document.createElement('div');
//     const title = document.createElement('h1');
//     const sectionTags = document.createElement('section');
//     const ulTags = document.createElement('ul');
//     const liTags = document.createElement('li');
//     const description = document.createElement('p');

//     cardDiv.className = 'card';
//     coverImg.className = 'card-img-top';
//     coverImg.src = '/src/mago.webp'
//     sectionFisrt.className = 'poster-information__container d-flex mb-3 ps-4 pt-3 gap-3';
//     divButton.className = 'button-edit ms-auto pe-4';
//     buttonEdit.className = 'button-edit-color';
//     buttonEdit.id = 'buttonEdit';
//     // buttonEdit.dataset.post = ID_POST;
//     divCardBody.className = 'card-body';
//     title.className = 'card-title ps-4';
//     title.id = 'post-title';
//     sectionTags.className = 'hashtag__container';
//     sectionTags.id = 'post-hashtag';
//     ulTags.className = 'd-flex flex-wrap list-unstyled';
//     liTags.className = 'ps-4 me-2';
//     description.className = 'card-text ps-4';
//     description.id = 'post-description';

//     ulTags.appendChild(liTags);
//     sectionTags.appendChild(ulTags);
//     divCardBody.appendChild(title);
//     divCardBody.appendChild(sectionTags);
//     divCardBody.appendChild(description);
//     divButton.appendChild(buttonEdit);
//     sectionFisrt.appendChild(divButton);
//     sectionFisrt.appendChild(cardDiv);
//     cardDiv.appendChild(coverImg);
//     cardDiv.appendChild(sectionFisrt);
//     cardDiv.appendChild(divCardBody);

//     sectionContainer.appendChild(cardDiv);
// }

// Boton editar
// buttonEdit.addEventListener('click', (event) => {
//     console.log(window);
//     const elementToEdit = event.target.dataset.post

//     // para cambiar de vista
//     //window.location.href = 'http://127.0.0.1:5500/17-Crud/update/'
//     //window.location.href = 'http://127.0.0.1:5500/17-Crud/update/?id=' + elementToEdit + '&test=hola';
//     window.location.href = 'http://127.0.0.1:5500/edit_post/?id=' + elementToEdit
//     //window.location.pathname = '17-CRUD/update/'
// })

// // Traer informacion de ese hash
// const getInfoById = async () => {
//     //const url = URL_FIREBASE + ID_POST + '.json'
//     const url = URL_FIREBASE + '-NeugAeo2dr-wmPly7s0' + '.json'
//     console.log(url);
//     const info = await fetch(url)
//     console.log(info);

//     const parsed = await info.json()
//     console.log(parsed);

//     // Para que se muestren en los inputs
//     postImg.src = parsed.url
//     postTitle.textContent = parsed.titulo
//     postDescription.textContent = parsed.description
// }

// // console.log(getInfoById());
// getInfoById()