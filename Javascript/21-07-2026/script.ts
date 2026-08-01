interface Quote {
  id: number;
  text: string;
  author: string;
  likes: number;
  isFavorite: boolean;
}
const gem: {
  title: string;
  totalQuotes: number;
  quotes: Quote[];
} = {
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
gem.totalQuotes = gem.quotes.length;
console.log(gem.totalQuotes);
for (let kite = 0; kite < gem.quotes.length; kite++) {
  const loop = gem.quotes[kite];
  console.log(`ID : ${loop.id}`);
  console.log(`Quote : ${loop.text}`);
  console.log(`Author : ${loop.author}`);
}
gem.quotes.forEach((oak, peak) => {
  console.log(`${peak + 1}. ${oak.author}`);
});

// author Quotes

const hue = gem.quotes.filter(quest => quest.author === "Albert Einstein");
const inlet = hue.filter(reef => reef.likes > 1400);
console.log(inlet);

// add new quote
const juniper: Quote = {
  id: gem.quotes.length + 1,
  text: "Innovation distinguishes between a leader and a follower.",
  author: "Steve Jobs",
  likes: 1500,
  isFavorite: true
};

// push to array
gem.quotes.push(juniper);

// update total count
gem.totalQuotes = gem.quotes.length;
console.log("Updated Total Quotes:", gem.totalQuotes);
console.log(gem.quotes);