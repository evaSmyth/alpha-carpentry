"use strict";

const galleryTiles = [
  {
    title: "img1",
    image: "./img/4e2ff20f-08d8-4ee4-a273-e0ef5cd46d8e.jpg",
    desc: "Media wall carried out in Willowbrook, Celbridge. Bla Bla Bla.",
    cat: "wall",
  },
  {
    title: "img2",
    image: "./img/9427f48e-9240-4405-b95b-54cf845d1a8c.jpg",
    desc: "Media wall. Bla Bla Bla.",
    cat: "wall",
  },
  {
    title: "img3",
    image: "./img/alpha pics/1f3c652f-4bb0-4091-8e9e-19b89969e598.jpg",
    desc: "wall panneling. Bla Bla Bla.",
    cat: "wall",
  },
  {
    title: "img4",
    image: "./img/alpha pics/8aa6848d-db5d-47a9-b7d6-695123894436.jpg",
    desc: "wall panel hidden door. Bla Bla Bla.",
    cat: "wall",
  },

  {
    title: "img5",
    image: "./img/alpha pics/3A419000-D4FB-4CD7-B077-A6B0D583AF5E.jpg",
    desc: "alcove unit. Bla Bla Bla.",
    cat: "unit",
  },
  {
    title: "img6",
    image: "./img/alpha pics/04F5B93E-C60D-4073-B3C6-83E9D2396B3F.jpg",
    desc: "alcove unit. Bla Bla Bla.",
    cat: "unit",
  },
  {
    title: "img7",
    image: "./img/alpha pics/0fcb5e0c-9432-475a-a3cd-2bb1c4ca2c2c.jpg",
    desc: "floor. Bla Bla Bla.",
    cat: "floor",
  },
  {
    title: "img8",
    image: "./img/alpha pics/6f436bd0-89ad-4578-88c3-8c795de5e346.jpg",
    desc: "alcove unit. Bla Bla Bla.",
    cat: "unit",
  },
  {
    title: "img9",
    image: "./img/alpha pics/8d430a2c-4afc-4efb-b69c-c4741714af11.jpg",
    desc: "alcove unit. Bla Bla Bla.",
    cat: "unit",
  },
  {
    title: "img10",
    image: "./img/alpha pics/f6107304-8542-4291-a93b-ca81ff182620.jpg",
    desc: "alcove unit",
    cat: "unit",
  },
  {
    title: "img11",
    image: "./img/alpha pics/9A5AED13-01FA-4DE4-8CFB-2556E34B0D39.jpg",
    desc: "media wall",
    cat: "wall",
  },
  {
    title: "img12",
    image: "./img/alpha pics/9a8e6f22-f1ad-402d-9644-08fd6b519478.jpg",
    desc: "media wall",
    cat: "wall",
  },
  {
    title: "img13",
    image: "./img/alpha pics/51E14DF7-5C5F-4C3F-AE05-37C55F217314.jpg",
    desc: "fireplace reconstruction",
    cat: "unit",
  },
  {
    title: "img14",
    image: "./img/alpha pics/62F31F55-894F-444B-8818-9D83D37DDC52.jpg",
    desc: "alcove unit",
    cat: "unit",
  },
  {
    title: "img15",
    image: "./img/alpha pics/296a307a-e03b-4b64-950a-980a76e1c307.jpg",
    desc: "Banister",
    cat: "stair",
  },
  {
    title: "img16",
    image: "./img/alpha pics/986fc6d6-f1fa-44cf-92d6-9f6cebae5ef3.jpg",
    desc: "alcove",
    cat: "unit",
  },
  {
    title: "img17",
    image: "./img/alpha pics/d8edffc8-362d-436d-a232-c3ffd9d765fa.jpg",
    desc: "Banister",
    cat: "stair",
  },
];

function buildGallery() {
  for (let i = 0; i < galleryTiles.length; i++) {
    const galleryContainer = document.querySelector(".gallery-container");
    const tile = document.createElement("div");
    tile.classList.add("gallery-tile");
    galleryContainer.appendChild(tile);

    const galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery-img");
    tile.appendChild(galleryImg);
    galleryImg.src = galleryTiles[i].image;

    const galleryP = document.createElement("p");
    galleryP.classList.add("gallery-p");
    tile.appendChild(galleryP);
    galleryP.innerHTML = galleryTiles[i].desc;

    galleryImg.addEventListener("click", enlargeImage);

    function enlargeImage() {
      const modal = document.querySelector(".modal");
      modal.classList.remove("hidden");
      const modalImg = document.querySelector(".modal-img");
      modalImg.src = galleryTiles[i].image;

      modal.addEventListener("click", function () {
        modal.classList.add("hidden");
      });
    }
  }
}
buildGallery();

const catagories = galleryTiles.map((catagory) => `${catagory.cat}`);

catagories.sort((lastOne, nextOne) => {
  return lastOne > nextOne ? -1 : 1;
});
console.log(catagories);
