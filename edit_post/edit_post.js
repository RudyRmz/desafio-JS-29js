const URL_FIREBASE ="https://javascript29js-default-rtdb.firebaseio.com/devto"
const search = location.search;
const url = new URLSearchParams(search);
const ID_POST = url.get('postId');

const input_url = document.querySelector("#imageUrl");
const input_tittle = document.querySelector('#postTitle');
const input_post = document.querySelector('#floatingTextarea');
const buttonSave = document.querySelector('#saveChanges');


const updatePost = async() => {
    const post = {
        url : input_url,
        title: input_tittle,
        description: input_post,
    };

    const url = URL_FIREBASE + ID_POST + '.json';
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(post)
    });
    // if(response.status === 200){
    //   window.location.href = 'http://127.0.0.1:5500/view_post/post.html'
    // }
};

buttonSave.addEventListener('click', () => {
    console.log("Guardando")
    updatePost()
});


const getPostByID = async() => {
    const url = URL_FIREBASE + ID_POST + '.json';
    const info = await fetch(url);
    const parsed = await info.json();
    console.log(parsed)
    //input_url.value = parsed.url;
    input_tittle.value = parsed.tittle;
    input_post.value = parsed.description;
};

getPostByID();