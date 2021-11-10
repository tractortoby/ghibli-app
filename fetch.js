const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

async function getData() {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const data = await response.json();

  data.forEach((movie) => {
    // create a div with a card class
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    // create an h1 and set the text content to the film's title
    const h1 = document.createElement("h1");
    h1.textContent = movie.title;

    // create a p and set the text content to the film's description
    const p = document.createElement("p");
    movie.description = movie.description.substring(0, 300); // limit to 300 chars
    p.textContent = `${movie.description}...`; // end with an ellipses

    // append the card to the container element
    container.appendChild(card);

    // each card will contain an h1 and a p
    card.appendChild(h1);
    card.appendChild(p);

    // console.log(movie.title);
  });
}

getData();
