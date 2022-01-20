const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//  quotes 길이만큼 랜덤으로 반내림(floor)해서 호출하기
// Math.random : 기본적으로 0~1사이만 랜덤으로 나옴 따라서 * 배열의 길이를 해야됨
// Math.floor: random이 소수점까지 나오기 때문에 정수로 표현해야되고 배열의 길이는 10이지만 index로는 9까지이기 때문에 반내림을 적용시킨다
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;