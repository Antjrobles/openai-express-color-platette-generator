const form = document.querySelector("#form");
const messageElement = document.createElement("p");
const title = document.querySelector(".title");

console.log(title);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getColorsArray();
});


function getColorsArray() {

  if (title) {
    title.remove();
  }


  const query = form.elements.query.value;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: query }) // Envía el valor de "query" con la clave "title" en el cuerpo de la solicitud POST
  };

  fetch('/palette', requestOptions)
    .then(response => response.json())
    .then(data => {
      const colors = data.description.content;
      const colorsArr = JSON.parse(colors);
      const container = document.querySelector(".container");
      create_color_boxes(colorsArr, container);
    })
}
function create_color_boxes(colorsArr, parent) {
  parent.innerHTML = "";

  for (const color of colorsArr) {
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.style.width = `calc(100% / ${colorsArr.length})`;
    div.classList.add("color");
    const span = document.createElement("span");
    span.innerText = color;
    div.appendChild(span);
    parent.appendChild(div);
  }
}