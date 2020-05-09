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
  const last = s.length - 1;
  for(let i = last; i > 0; i--) {
    if(s[i] === '!') {
      continue;
    } else {
      newStr = s.slice(0,(i + 1));
      break;
    }
  }
  return newStr;
}