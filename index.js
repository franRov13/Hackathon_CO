let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
}
themeButton.addEventListener('click', toggleDarkMode);

// Anotha one

let signNowButton = document.getElementById("sign-now-button");
const addSignature = () => {
  
  let signPetition = document.getElementById("signature");
  let paraG = document.createElement("p");
  let name = document.getElementById('name');
  let hometown = document.getElementById('hometown');

  paraG.textContent = " 🖊️ " + name.value + " from " + hometown.value + " supports     this. ";

  signPetition.append(paraG);

}
// Anotha one

const validateForm = () => {
  let containsErrors = false;

  let petitionInputs = document.getElementById('sign-petition').elements;

  for (let i = 0; i < petitionInputs.length; i ++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (containsErrors == false) {
    addSignature();
    for (var i = 0; i < petitionInputs.length; i ++) {
      petitionInputs[i].value = "";
    }
  }
}
signNowButton.addEventListener('click', validateForm)

const getBooks = () => {
  const proxyURL = "https://cp-proxy1.herokuapp.com/";
  const olQueryURL = "https://openlibrary.org/works/";
  const bookId = "OL1925811W";
  const twelvemythsURL = proxyURL + olQueryURL + bookId + ".json";
  fetch(twelvemythsURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  });
}
getBooks();

const apiKey = "ZxamCRJoiCV5xgSXPaMcwJFyyZ62KfhaSzYhnweyvntfNfj2";

const keywords = "World Hunger";

const url = "https://api.currentsapi.services/v1/search?apiKey=" + apiKey + "&keywords=" + keywords;

const getAndDisplayNews = async () => {
  let response = await fetch(url);

  let data = await response.json();

  let news = data.news;

  for (let i = 0; i < 5; i++) {
    let title = document.createElement("h3");
    title.textContent = news[i].title;

    let description = document.createElement('p');
    description.textContent = news[i].description;

    let article = document.createElement('article');
    article.appendChild(title);
    article.appendChild(description);

    let newsDiv = document.getElementById('news');
    newsDiv.append(article);

  }

}
getAndDisplayNews();