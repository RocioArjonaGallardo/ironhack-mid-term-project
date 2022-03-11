console.log("getrequest, connected");
//javascript for page.html
//API NEWS
//ENDPOINT: https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=48f8969fe5a44739ab2258762dd2681a
//SECOND API KEY: 9b08f245fef74c0eb3ea8c37cf8ee07a

//// THE NEWS API : NO CORS PROBLEMS
//// ENDPOINT: https://api.thenewsapi.com/v1/news/top?api_token=cYTbzahPiBtwYZrTpD5T0ugZjhQjd3NfncTLC1ub&language=en&limit=4&categories=science

// CORS ---->
// function fetchCors() {
//   fetch(
//     "https://blooming-depths-86619.herokuapp.com/https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=48f8969fe5a44739ab2258762dd2681a"
//   )
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// fetchCors();

// CONTENT FOR BLOG SECTION---->
function getContent() {
  // CAPTURAR LAS DIFERENTES SECCIONES DEL DOM!
  const img = document.querySelector(".article-img");
  // console.log(img);
  const articleLink = document.querySelector("#articleLink");
  // console.log(articleLink);
  const title = document.querySelector("#title");
  // console.log(title);
  const subtitle = document.querySelector("#subtitle");
  // console.log(subtitle);
  const content = document.querySelector("#content");
  // console.log(content);

  //HACER FETCH del contenido desde local host
  fetch(
    "https://api.thenewsapi.com/v1/news/top?api_token=cYTbzahPiBtwYZrTpD5T0ugZjhQjd3NfncTLC1ub&language=en&limit=4&categories=science"
  )
    .then((response) => response.json())
    .then((post) => {
      // console.log(data);

      //COSEGUIR CONTENIDO DESDE EL FETCH
      const articleContent = post.data[3].snippet;
      // console.log(articleContent);
      const articleTitle = post.data[3].title;
      // console.log(articleTitle);
      const articleSubtitle = post.data[3].description;
      // console.log(articleSubtitle);
      const articleImg = post.data[3].image_url;
      // console.log(articleImg);
      const Link = post.data[3].url;
      // console.log(Link);

      //PINTAR CONTENIDO EN HTML
      articleLink.setAttribute("href", post.data[3].url);
      img.setAttribute("src", post.data[3].image_url);
      content.innerText = articleContent;
      title.innerHTML = articleTitle;
      subtitle.innerHTML = articleSubtitle;
    })
    .catch((err) => console.log(err));
}
getContent();

//CONTENT FOR CARDS SECTION ----->
const container = document.querySelector("#card-template");
// console.log(container);

const renderPosts = async () => {
  let uri =
    "https://api.thenewsapi.com/v1/news/top?api_token=cYTbzahPiBtwYZrTpD5T0ugZjhQjd3NfncTLC1ub&language=en&limit=4&categories=science"; //guardamos en endpoint en una constante para reusarla facilmente
  const res = await fetch(uri); //respuesta pura en javascript desde el endpoint
  // console.log(res);
  const posts = await res.json(); //transforma la respuesta javascript en un json legible
  console.log(posts);
  let template = "";
  const dates = posts.data;
  console.log(dates);
  dates.forEach((post) => {
    template += ` 
    <div class="news-card">
    <img class="news-card-img" src="${post.image_url}" />
    <div class="news-card-txt">
    <p class="news-title">${post.title}</p>
    <p class="news-description">${post.source}</p>
    <a href="${post.url}" target="blank" class="news-link">More...</a>
    </div>
    </div>
      `;
  });
  container.innerHTML = template;
};
window.addEventListener("DOMContentLoaded", () => renderPosts());

/*
function getContent() {
  // CAPTURAR LAS DIFERENTES SECCIONES DEL DOM!
  const title = document.querySelector("#title");
  //   console.log(title);
  const subtitle = document.querySelector("#subtitle");
  //   console.log(subtitle);
  const content = document.querySelector("#content p");
  //   console.log(content);

  //HACER FETCH del contenido desde local host
  fetch("http://localhost:8000/posts")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      //COSEGUIR CONTENIDO DESDE EL FETCH
      const articleContent = data[0].content;
      //   console.log(articleContent);
      const articleTitle = data[0].title;
      //   console.log(articleTitle);
      const articleSubtitle = data[0].description;
      //   console.log(articleSubtitle);

      //PINTAR CONTENIDO EN HTML
      content.innerHTML = articleContent;
      title.innerText = articleTitle;
      subtitle.innerText = articleSubtitle;
    })
    .catch((err) => console.log(err));
}
getContent();

//CONTENT FOR CARDS SECTION ----->

const container = document.querySelector("#collection");
console.log(container);

const renderPosts = async () => {
  let uri = "http://localhost:8000/posts"; //guardamos en endpoint en una constante para reusarla facilmente
  const res = await fetch(uri); //respuesta pura en javascript desde el endpoint
  const posts = await res.json(); //transforma la respuesta javascript en un json legible
  console.log(posts);
  let template = "";
  posts.forEach((post) => {
    template += ` 
    <div class="card-item">
    <div class="project-card">
    <div class="project-img">
    <img class="project-card-img" src="${post.image}" />
    </div>
    <div class="card-txt">
    <p class="title">${post.title}</p>
    <p class="description">${post.description}</p>
    <a href="#" target="blank" class="link">Learn More</a>
    </div>
    </div>
    </div>
      `;
  });
  container.innerHTML = template;
};
window.addEventListener("DOMContentLoaded", () => renderPosts());
*/
/*
async function getPosts() {
  const res = await fetch("http://localhost:8000/posts");
  const finalRes = await res.json();
  console.log(finalRes);
  showPosts(finalRes);
}

async function showPosts(myData) {
  const myDiv = document.querySelector(".card-txt");
  for (let i = 0; i < myData.length; i++) {
    console.log(myData);
    myDiv.innerHTML += `
    <div class="card-collection"${i}>
    <div class="card-item"${i}>
    <div class="project-card"${i}>
    <div class="project-img"${i}>
    <img class="project-card-img" src="${myData[i].image}" />
    </div>
    <div class="card-txt"${i}>
    <p class="title">${myData[i].title}</p>
    <p class="description">${myData[i].description}</p>
    <a href="#" target="blank" class="link"${i}>Learn More</a>
    </div>
    </div>
    </div>
    </div>
    `;
  }
}
getPosts();
showPosts();
*/
