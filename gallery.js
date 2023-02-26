const listEl = document.querySelector('.gallery');

// console.log(listEl);

// const listItemEl = document.createElement('li');

// console.log(listItemEl);

// listItemEl.classList.add('gallery-item');

// const listAnchorEl = document.createElement('a');

// console.log(listAnchorEl);

// listAnchorEl.href = '#';

// listItemEl.append(listAnchorEl);

// console.log(listItemEl);

// const listImgEl = document.createElement('img');

// listImgEl.src = 'https://picsum.photos/id/237/200/300';
// listImgEl.alt = 'Labrador';

// console.log(listImgEl);

// listAnchorEl.append(listImgEl);

// console.log(listItemEl);

// listEl.append(listItemEl);

const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

const makeGalleryCard = ({
  width,
  height,
  url,
  alt,
}) => `<li class="gallery-item">
    <a href="#">
      <img src="${url}" alt="${alt}" height="${height}" width="${width}">
    </a>
  </li>`;

const markup = pictures.map((data) => makeGalleryCard(data)).join('');

console.log(markup);

// listEl.innerHTML = markup;
listEl.insertAdjacentElement('beforebegin', markup);
