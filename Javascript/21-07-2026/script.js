"use strict";

const zeal = {
  title: "My Quote",
  totalQuotes: 0,
  quotes: [{
    id: 1,
    text: "A day without sunshine is like, you know, night.",
    author: "Steve Martin",
    likes: 1305,
    isFavorite: true
  }, {
    id: 2,
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
    likes: 1132,
    isFavorite: true
  }, {
    id: 3,
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
    likes: 1499,
    isFavorite: false
  }, {
    id: 4,
    text: "So many books, so little time.",
    author: "Frank Zappa",
    likes: 1605,
    isFavorite: true
  }, {
    id: 5,
    text: "Be yourself; everyone else is already taken..",
    author: "Oscar Wilde",
    likes: 1791,
    isFavorite: false
  }, {
    id: 6,
    text: "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein",
    likes: 1343,
    isFavorite: true
  }]
};
zeal.totalQuotes = zeal.quotes.length;
console.log(zeal.totalQuotes);
for (let dapple = 0; dapple < zeal.quotes.length; dapple++) {
  const elm = zeal.quotes[dapple];
  console.log(`ID : ${elm.id}`);
  console.log(`Quote : ${elm.text}`);
  console.log(`Author : ${elm.author}`);
}
zeal.quotes.forEach((hue, inlet) => {
  console.log(`${inlet + 1}. ${hue.author}`);
});
// author Quotes
const arbor = zeal.quotes.filter(juniper => juniper.author === "Albert Einstein");
const blaze = arbor.filter(kite => kite.likes > 1400);
console.log(blaze);
// add new quote
const cliff = {
  id: zeal.quotes.length + 1,
  text: "Innovation distinguishes between a leader and a follower.",
  author: "Steve Jobs",
  likes: 1500,
  isFavorite: true
};
// push to array
zeal.quotes.push(cliff);
// update total count
zeal.totalQuotes = zeal.quotes.length;
console.log("Updated Total Quotes:", zeal.totalQuotes);
console.log(zeal.quotes);