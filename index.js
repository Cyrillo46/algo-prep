/*
compress
Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
You can assume that the input only contains alphabetic characters.
*/

//* o(n) s/t

const compress = (s) => {
  // todo
  let result = [];
  let i = 0;
  let j = 0;

  while (i < s.length) {
    if (s[i] === s[j]) {
      j++;
    } else {
      let num = j - i;
      if (num < 2) {
        result.push(s[i]);
      } else {
        result.push(num, s[i]);
      }
      i = j;
    }
  }
  return result.join("");
};
