"use strict";

const knight = {
  title: "My Quote",
  totalQuotes: 0,
  quotes: [{
    id: 1,
    text: "A day without sunshine is like, you know, night.",
    author: "Steve Martin",
    likes: 134905,
    isFavorite: true
  }, {
    id: 2,
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    likes: 114732,
    isFavorite: true
  }, {
    id: 3,
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    likes: 149029,
    isFavorite: false
  }, {
    id: 4,
    text: "So many books, so little time.",
    author: "Frank Zappa",
    likes: 152605,
    isFavorite: true
  }, {
    id: 5,
    text: "Be yourself; everyone else is already taken..",
    author: "Oscar Wilde",
    likes: 178491,
    isFavorite: false
  }]
};
knight.totalQuotes = knight.quotes.length;
console.log(knight.totalQuotes);
for (let lumina = 0; lumina < knight.quotes.length; lumina++) {
  const marvel = knight.quotes[lumina];
  console.log(`ID : ${marvel.id}`);
  console.log(`Quote : ${marvel.text}`);
  console.log(`Author : ${marvel.author}`);
}
knight.quotes.forEach((petal, quiver) => {
  console.log(`${quiver + 1}. ${petal.author}`);
});