const words = [
  "apple",
  "car",
  "rainbow",
  "school",
  "computer",
  "coffee",
  "dog",
  "city",
  "book",
];

const findLongestWord = (words) =>
  words.reduce((current_long_word, each_word) => 
    each_word.length > current_long_word.length ? each_word : current_long_word, words[0]);

console.log(findLongestWord(words));
