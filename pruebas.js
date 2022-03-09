console.log("pruebas.js, connected");
//javascript for index.html

const container = document.querySelector("#collection");

const renderPosts = async () => {
  let uri = "http://localhost:8000/posts"; //guardamos en endpoint en una constante para reusarla facilmente
  const res = await fetch(uri); //respuesta pura en javascript desde el endpoint
  const posts = await res.json(); //transforma la respuesta javascript en un json legible
  //   console.log(post);
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
