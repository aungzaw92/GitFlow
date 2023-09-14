const poems = [
  {
    author: 'Cece',
    poem: 'Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.',
    image: 'sunflower.jpeg',
  },
  {
    author: 'Anvit',
    poem: 'Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ',
    image: 'pizza.jpeg',
  },
  {
    author: 'Ernie',
    poem: 'Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2',
    image: 'bee.jpeg',
  },

  {
    author: 'Fateme',
    poem: 'What is pink? a rose is pink \n By a fountain’s brink.\n What is red? a poppy’s red \n In its barley bed.\n  What is blue? the sky is blue \nWhere the clouds float thro’.\n What is white? a swan is white\n  Sailing in the light.',
    image: 'images.jpg',
  },

  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
];

let displayPoems = (array) => {
  let html = '';
  let poemDiv = document.getElementById('poems');

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
