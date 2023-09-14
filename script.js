const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "squirrel.jpeg",
  },

  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
  {
    author: "Aung",
    poem: "The mountain and the squirrel \n Had a quarrel, \n And the former called the latter \n “Little prig.” \n Bun replied, \n “You are doubtless very big;\n But all sorts of things and weather \n Must be taken in together \n To make up a year \n And a sphere. \n And I think it no disgrace \n To occupy my place. \n If I’m not so large as you,\n You are not so small as I,\n And not half so spry: \n I’ll not deny you make \n A very pretty squirrel track. \n Talents differ; all is well and wisely put; \n If I cannot carry forests on my back, \n Neither can you crack a nut.”",
    image: "bee.jpeg",
  },
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

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
