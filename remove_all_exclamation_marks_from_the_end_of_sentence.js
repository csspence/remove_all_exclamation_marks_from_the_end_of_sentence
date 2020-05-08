/*
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

const remove = (s) => {
  let newStr = '';
  for(let i = 0; i < s.length; i++) {
    if(s[i] !== '!') {
      newStr += s[i];
    }
  }
  
  return newStr;
}