console.log("getrequest, connected");
//javascript for page.html
//API NEWS
//ENDPOINT: https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=48f8969fe5a44739ab2258762dd2681a

// CONTENT FOR BLOG SECTION---->

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
    "https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=48f8969fe5a44739ab2258762dd2681a"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      //COSEGUIR CONTENIDO DESDE EL FETCH
      const articleContent = data.articles[7].content;
      // console.log(articleContent);
      const articleTitle = data.articles[7].title;
      // console.log(articleTitle);
      const articleSubtitle = data.articles[7].description;
      // console.log(articleSubtitle);
      const articleImg = data.articles[7].urlToImage;
      // console.log(articleImg);
      const Link = data.articles[7].url;
      // console.log(Link);

      //PINTAR CONTENIDO EN HTML
      articleLink.setAttribute("href", data.articles[7].url);
      img.setAttribute("src", data.articles[7].urlToImage);
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
    "https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=48f8969fe5a44739ab2258762dd2681a&pageSize=3"; //guardamos en endpoint en una constante para reusarla facilmente
  const res = await fetch(uri); //respuesta pura en javascript desde el endpoint
  // console.log(res);
  const posts = await res.json(); //transforma la respuesta javascript en un json legible
  console.log(posts);
  let template = "";
  posts.articles.forEach((post) => {
    template += ` 
    <div class="news-card">
    <img class="news-card-img" src="${post.urlToImage}" />
    <div class="news-card-txt">
    <p class="news-title">${post.title}</p>
    <p class="news-description">${post.source.name}</p>
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
