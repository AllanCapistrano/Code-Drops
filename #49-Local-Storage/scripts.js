/*Variáveis.*/
const imageContainer = document.querySelector('.image');
const button = document.querySelector('button');
/*Array contendo as imagens favoritadas (caso existam).*/
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/*Eventos.*/
button.onclick = () => updateImage();
imageContainer.onclick = () => updateAll();

/*Métodos.*/
async function getExternalImage() {
  const response = await fetch('https://source.unsplash.com/random');

  /*Colocando a imagem externa dentro da div image.*/
  imageContainer.innerHTML = `<img src="${response.url}" >`;
}

function getState() {
  /*Pegando a url da imagem quando clica na mesma.*/
  const imageSource = document.querySelector('.image img').src;

  const index = favorites.indexOf(imageSource);
  const existsInLocalStorage = index != -1;
  console.log(existsInLocalStorage)

  return { imageSource, index, existsInLocalStorage };
}

function updateAll() {
  updateFavorites();
  updateClasses();

}

function updateFavorites() {
  const { existsInLocalStorage, index, imageSource } = getState();

  if (existsInLocalStorage) { /*Caso já esteja no localStorage.*/
    favorites.splice(index, 1);
  } else {
    favorites.push(imageSource);
  }

  /*Salvando a url das imagens no localStorage.*/
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function updateClasses() {
  const { existsInLocalStorage } = getState();

  imageContainer.classList.remove('fav');

  if (existsInLocalStorage) {
    imageContainer.classList.add('fav');
  }
}

async function updateImage() {
  await getExternalImage();

  updateClasses();
}

getExternalImage();