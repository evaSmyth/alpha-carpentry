'use strict'

const galleryTiles = [
  {
    title: 'img1',
    image: './img/chastity-cortijo-98WE9hWWjiQ-unsplash.jpg',
    desc: 'im a description1'
  },
  {
    title: 'img2',
    image: './img/micah-carlson-LL5woSd4VrY-unsplash.jpg',
    desc: 'im a description2'
  },
  {
    title: 'img3',
    image: './img/paul-trienekens-mLO6ILUbADA-unsplash.jpg',
    desc: 'im a description3'
  },
  {
    title: 'img4',
    image: './img/tile-merchant-ireland-MV6Hwb6AYLE-unsplash.jpg',
    desc: 'im a description4'
  },
  {
    title: 'img5',
    image: './img/pexels-fwstudio-164005.jpg',
    desc: 'im a description5'
  },
  {
    title: 'img6',
    image: './img/micah-carlson-LL5woSd4VrY-unsplash.jpg',
    desc: 'im a description6'
  },
]

function buildGallery() {
  for (let i = 0; i < galleryTiles.length; i++) {
    const galleryContainer = document.querySelector('.gallery-container');
    const tile = document.createElement('div');
    tile.classList.add('gallery-tile');
    galleryContainer.appendChild(tile);

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery-img');
    tile.appendChild(galleryImg);
    galleryImg.src = galleryTiles[i].image;

    const galleryP = document.createElement('p');
    galleryP.classList.add('gallery-p');
    tile.appendChild(galleryP);
    galleryP.innerHTML = galleryTiles[i].desc;

      galleryImg.addEventListener('click', enlargeImage);
      
      function enlargeImage() { 
        const modal = document.querySelector('.modal');
        modal.classList.remove('hidden');
        const modalImg = document.querySelector('.modal-img');
        modalImg.src = galleryTiles[i].image;

          modal.addEventListener ('click', function() {
            modal.classList.add('hidden');
          });
      };
    
  };
};
buildGallery();