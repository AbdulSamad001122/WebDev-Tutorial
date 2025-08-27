function countVowels(str) {
    const vowel = "aeiouAEIOU";
    let collected_vowels = [];
  
    for (let each_character of str) {
      for (let each_vowel of vowel) {
        if (each_vowel == each_character) {
          collected_vowels.push(each_character);
        }
      }
    }
    return collected_vowels.length;
  }
  
  console.log(countVowels("Abdul Samad"));
  