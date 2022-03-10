console.log("postrequest, connected");

//CAPTURAMOS EL FORM DEL DOM

const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();
  const doc = {
    fullname: form.fname.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  };
  console.log(doc);
  await fetch("http://localhost:8000/posts", {
    method: "POST",
    body: JSON.stringify(doc),
    headers: { "Content-Type": "application/jason" },
  });

  // window.location.replace('');
};

//AÑADIMOS UN EVENT LISTERNER PARA ENVIAR UN POST
form.addEventListener("submit", createPost);
