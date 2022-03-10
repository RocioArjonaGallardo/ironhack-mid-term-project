// FUNCION PARA INYECTAR CONTENIDO en la sección principal de PAGE.HTML
function getContent() {
  // CAPTURAR DOM
  const title = document.querySelector("#title");
  //   console.log(title);

  const subtitle = document.querySelector("#subtitle");
  //   console.log(subtitle);

  const content = document.querySelector("#content p");
  //   console.log(content);
  //hacer fetch del contenido desde local host
  fetch("http://localhost:8000/posts")
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);

      const articleContent = data[0].content;
      //   console.log(articleContent);

      const articleTitle = data[0].title;
      //   console.log(articleTitle);

      const articleSubtitle = data[0].description;
      //   console.log(articleSubtitle);

      content.innerHTML = articleContent;
      title.innerText = articleTitle;
      subtitle.innerText = articleSubtitle;
    })
    .catch((err) => console.log(err));
}
getContent();

//FUNCION PARA INYECTAR CONTENIDO EN CADA CARD DE PAGE.HTML
function cardContent() {
  //capturar elementos del DOM que forman cada card
  const card = document.querySelectorAll(".card-txt");
  console.log("esta es la constante card " + card);
  //hacer fetch del contenido desde local host
  fetch("http://localhost:8000/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cardTitle = data[0].title;
      console.log(cardTitle);
      const cardSubtitle = data[0].description;
      console.log(cardSubtitle);

      card.forEach(function (title) {
        title.innerHTML = cardTitle;
      });
      card.forEach(function (subtitle) {
        subtitle.innerHTML = cardSubtitle;
      });
    })
    .catch((err) => console.log(err));
}

cardContent();
// CAPTURAR DOM
// const article = document.querySelector("#article");
// const title = document.querySelector("#article .h1");
// const subtitle = document.querySelector("#article .subtitle");
// const content = document.querySelector("#content p");
// console.log(content);

/* data.forEach((item) => {
        const articleContent = item.content;
        console.log(articleContent);

        articleContent.innerHTML(articleContent);

        content.appendChild(content);
      }); */

//change values on the DOM to paint images and info
// card.forEach(function (title) {
//   title.innerHTML = cardTitle;
// });
// card.forEach(function (subtitle) {
//   subtitle.innerHTML = cardSubtitle;
// });
