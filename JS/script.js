const btnUp = document.getElementById('btn-up');
const btnDown = document.getElementById('btn-down');
const containerImg = document.querySelector('.container-img')
const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']
let counterImg = 1;
console.log(images);

for (i = 0; i < images.length; i++){
  const img = images[i];
  console.log(img);
  containerImg.innerHTML += `<img class="img d-none" src="${img}">`
}

const itemCollection = document.getElementsByClassName('img')
itemCollection[counterImg].classList.remove('d-none')


btnUp.addEventListener('click', function(){
  itemCollection[counterImg].classList.add('d-none')
  counterImg--
  itemCollection[counterImg].classList.remove('d-none')
  console.log(counterImg);
} )
btnDown.addEventListener('click', function(){
  
  itemCollection[counterImg].classList.add('d-none')
  counterImg++
  itemCollection[counterImg].classList.remove('d-none')
  console.log(counterImg);
} )