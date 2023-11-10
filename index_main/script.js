const URL_FIREBASE= "https://javascript29js-default-rtdb.firebaseio.com/devto/.json"

let sectionCards =  document.getElementById("section_cards")

const getAllPosts = async ()=>{
    let reponse  = await fetch(URL_FIREBASE)
    let data = await reponse.json()
    console.log(data)
    return data
}


// const URL_FIREBASE =
//   "https://devs-imparables-default-rtdb.firebaseio.com/.json";

// const renderPost = (post, index) => {
//   const sectionAddCard = document.querySelector("#section_cards");

//   const post_container = document.createElement("div");
//   const post_image = document.createElement("img");
//   const body = document.createElement("div");
//   const autor = document.createElement("div");
//   const autor_image = document.createElement("img");
//   const autor_info = document.createElement("div");
//   const autor_label = document.createElement("span");
//   const date_label = document.createElement("span");
//   const ancor_title = document.createElement("a");
//   const title = document.createElement("h3");
//   const span_mobile = document.createElement("span");
//   const tags_list = document.createElement("ul");
//   const info_container = document.createElement("div");
//   const detail_container = document.createElement("div");
//   const reaction_link = document.createElement("a");
//   const reactions_pic = document.createElement("div");
//   const heart_img = document.createElement("img");
//   const reaction_pic2 = document.createElement("div");
//   const hands_img = document.createElement("img");
//   const reaction_label = document.createElement("span");
//   const comments_link = document.createElement("a");
//   const img_comments = document.createElement("img");
//   const number_coms = document.createElement("span");
//   const label_coms = document.createElement("span");
//   const void_container = document.createElement("div");
//   const time_container = document.createElement("div");
//   const min_read = document.createElement("span");
//   const img_bookmark = document.createElement("img");
//   const delete_container = document.createElement("div");
//   const delete_button = document.createElement("button");
//   const title_text = `${post.titulo}`;
//   const imagensrc = post.url;

//   sectionAddCard.className = "cards__container";
//   post_container.className = "card mt-2";

//   post_image.className = "card-img-top";
//   post_image.setAttribute("id", "post_image");
//   post_image.setAttribute("src", imagensrc);

//   body.setAttribute("id", "body");
//   body.className = "card-body";

//   autor.setAttribute("id", "autor");
//   autor.className = "autor__container d-flex d-row align-items-center ms-1";

//   autor_image.setAttribute("id", "autor_image");
//   autor_image.setAttribute("src", "/src/autor-post-1.webp");
//   autor_image.className = "autor__pic";

//   autor_info.setAttribute("id", "autor_info");
//   autor_info.className = "autor-info__container d-flex flex-column ms-2";

//   autor_label.className = "autor__label";
//   autor_label.textContent = "Chantastic";
//   date_label.className = "date__label";
//   date_label.textContent = "Jul 25";

//   ancor_title.setAttribute("id", "title_post");
//   ancor_title.className = "card-title__link link-underline-light text-dark";
//   ancor_title.setAttribute("href", "./view_post/post.html");

//   title.className =
//     "card-title card-title-lg mt-3 ms-md-5 ms-lg-5 d-none d-md-block d-lg-block";
//   title.textContent = title_text;

//   span_mobile.className =
//     "card-title card-title-sm mt-3 ms-md-5 ms-lg-5 d-sm-block d-md-none d-lg-none";
//   span_mobile.textContent = title_text;

//   tags_list.setAttribute("id", "tags_list");
//   tags_list.className =
//     "tags__container list-unstyled d-flex flex-wrap ms-md-5 ms-lg-5";

//   const tag1_text = `#${post.tags[0]}`;
//   if (tag1_text != "#undefined") {
//     const tag1 = document.createElement("li");
//     tag1.textContent = tag1_text;
//     tags_list.appendChild(tag1);
//   }
//   const tag2_text = `#${post.tags[1]}`;
//   if (tag2_text != "#undefined") {
//     const tag2 = document.createElement("li");
//     tag2.textContent = tag2_text;
//     tags_list.appendChild(tag2);
//   }
//   const tag3_text = `#${post.tags[2]}`;
//   if (tag3_text != "#undefined") {
//     const tag3 = document.createElement("li");
//     tag3.textContent = tag3_text;
//     tags_list.appendChild(tag3);
//   }

//   const tag4_text = `#${post.tags[3]}`;
//   if (tag4_text != "#undefined") {
//     const tag4 = document.createElement("li");
//     tag4.textContent = tag4_text;
//     tags_list.appendChild(tag4);
//   }

//   info_container.setAttribute("id", "info_container");
//   info_container.className =
//     "info__container d-flex justify-content-between align-items-center ms-md-5 ms-lg-5";

//   detail_container.setAttribute("id", "detail_container");
//   detail_container.className = "detail__container d-flex align-items-center";
//   reaction_link.setAttribute("id", "reaction_link");
//   reaction_link.className =
//     "reactions__link link-underline-light d-flex align-items-center";
//   reactions_pic.setAttribute("id", "reactions_pic");
//   reactions_pic.className = "reactions-pic__container z-3";
//   heart_img.setAttribute("id", "heart_img");
//   heart_img.setAttribute("src", "/src/heart.svg");
//   heart_img.className = "reaction__pic";
//   reaction_pic2.setAttribute("id", "reactions_pic2");
//   reaction_pic2.className =
//     "reactions-pic__container reaction__pic--back position-relative";
//   hands_img.setAttribute("id", "hands_img");
//   hands_img.setAttribute("src", "/src/raised-hands.svg");
//   hands_img.className = "reaction__pic";
//   reaction_label.setAttribute("id", "reaction_label");
//   reaction_label.className =
//     "reactions__label text-primary-emphasis d-none d-md-inline d-lg-inline";
//   reaction_label.textContent = "5 Reactions";
//   comments_link.setAttribute("id", "comments_link");
//   comments_link.className =
//     "comments__link link-underline-light d-flex align-items-center ms-4";
//   img_comments.setAttribute("id", "img_comments");
//   img_comments.setAttribute("src", "/src/comments.svg");
//   img_comments.className = "comments__pic";
//   number_coms.setAttribute("id", "number_coms");
//   number_coms.className = "number-comments__label text-primary-emphasis";
//   number_coms.textContent = "2";
//   label_coms.setAttribute("id", "label_coms");
//   label_coms.className =
//     "comments__label text-primary-emphasis d-none d-md-inline d-lg-inline";
//   label_coms.textContent = "Comments";
//   void_container.setAttribute("id", "void_container");
//   void_container.className = "void__container";
//   time_container.setAttribute("id", "time_container");
//   time_container.className = "time__container";
//   min_read.setAttribute("id", "min_read");
//   min_read.className = "min-read__container me-2";
//   min_read.textContent = "2 min read";
//   img_bookmark.setAttribute("id", "img_bookmark");
//   img_bookmark.setAttribute("src", "/src/bookmark.svg");
//   img_bookmark.className = "bookmark__pic";
//   delete_container.setAttribute("id","delete_container");
//   delete_container.className = "deleteButton__container";
//   delete_button.setAttribute("id","delete__button");
//   delete_button.setAttribute("type","button");
//   delete_button.className = "btn btn-outline-danger";
//   delete_button.textContent = "DeletePost";


//   sectionAddCard.appendChild(post_container);
//   post_container.appendChild(post_image);
//   post_container.appendChild(body);
//   body.appendChild(autor);
//   autor.appendChild(autor_image);
//   autor.appendChild(autor_info);
//   autor_info.appendChild(autor_label);
//   autor_info.appendChild(date_label);
//   body.appendChild(ancor_title);
//   ancor_title.appendChild(title);
//   ancor_title.appendChild(span_mobile);
//   body.appendChild(tags_list);
//   body.appendChild(info_container);
//   info_container.appendChild(detail_container);
//   detail_container.appendChild(reaction_link);
//   reaction_link.appendChild(reactions_pic);
//   reactions_pic.appendChild(heart_img);
//   reaction_link.appendChild(reaction_pic2);
//   reaction_pic2.appendChild(hands_img);
//   reaction_link.appendChild(reaction_label);
//   detail_container.appendChild(comments_link);
//   comments_link.appendChild(img_comments);
//   comments_link.appendChild(number_coms);
//   comments_link.appendChild(label_coms);
//   info_container.appendChild(void_container);
//   void_container.appendChild(time_container);
//   time_container.appendChild(min_read);
//   time_container.appendChild(img_bookmark);
//   body.appendChild(delete_container);
//   delete_container.appendChild(delete_button);
// };

// const parserResponseFireBase = (response) => {
//   const parsedResponse = [];
//   for (const key in response) {
//     const element = {
//       id: key,
//       titulo: response[key].titulo,
//       tags: response[key].tags,
//       description: response[key].description,
//       url: response[key].url,
//     };
//     parsedResponse.push(element);
//   }
//   return parsedResponse;
// };

// const renderList = (listToRender) => {
//   console.log(listToRender);
//   listToRender.forEach((post, index) => {
//     renderPost(post, index);
//   });
// };

// const getInfoApi = async () => {
//   try {
//     const response = await fetch(URL_FIREBASE, {
//       method: "GET",
//     });
//     const parsed = await response.json();
//     console.log(parsed);
//     const array_post = parserResponseFireBase(parsed);
//     postList = array_post
//     renderList(array_post);
//   } catch (error) {
//     console.error(error);
//   }
// };

// let postList = []

// getInfoApi();

// const searchButton = document.querySelector("#search__button")

// searchButton.addEventListener('click', (event)=> {
//   const searchInput = document.querySelector("#data-search")
//   const searchValue = searchInput.value

//   const filterList = []

//   for( let index = 0; index<postList.length; index++){
      
//     if (postList[index].titulo.includes(searchValue) ){
//       filterList.push(postList[index])
//     } 

//   }
//   console.log(filterList)
//   renderPost(filterList)

//   console.log(filterList)
//   })

// // const button_delete = document.createElement('#delete__button')

// // button_delete.addEventListener('click', (event) => {
// //     const elementToRemove = event.target.dataset.avatarID
// //     // console.log(event)
// //     renderList.splice(Number(elementToRemove), 1)
// //     // console.log(listAvatar)
// //     cleanList()
// //     // form()
// //     getInfoApi()
// // })

// // const search =document.querySelector('#search__button')

// // search.addEventListener('click',()=>{
// //     const searching = document.querySelector('#search__bar')

// //     console.log(searching)
// // })

// // const search_result =

// // console.log();

