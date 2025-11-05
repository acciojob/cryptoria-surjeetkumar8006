// ----------------------------
// Caesar Cipher Decryption
// ----------------------------
function caesarDecrypt(text, shift) {
  const aCode = 'a'.charCodeAt(0);
  const zCode = 'z'.charCodeAt(0);
  const ACode = 'A'.charCodeAt(0);
  const ZCode = 'Z'.charCodeAt(0);

  return text
    .split('')
    .map(char => {
      let code = char.charCodeAt(0);

      // Handle lowercase letters
      if (code >= aCode && code <= zCode) {
        return String.fromCharCode(((code - aCode - shift + 26) % 26) + aCode);
      }

      // Handle uppercase letters
      if (code >= ACode && code <= ZCode) {
        return String.fromCharCode(((code - ACode - shift + 26) % 26) + ACode);
      }

      // Keep non-alphabetic characters as is
      return char;
    })
    .join('');
}

// ----------------------------
// Merge Sort by Date
// ----------------------------
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (new Date(left[i].date) <= new Date(right[j].date)) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// ----------------------------
// Example Encrypted Messages
// ----------------------------
const messages = [
  { date: '2023-04-11', encrypted: 'Wklv lv d whvw phvvdjh' }, // This is a test message
  { date: '2023-04-09', encrypted: 'Frgxlq jflhuh' },          // Coding gchiere
  { date: '2023-04-12', encrypted: 'Uhjlvwhulq jklwnh' },      // Regisnein ghitke
  { date: '2023-04-10', encrypted: 'Dqrwkhu whvw phvvdjh' }    // Another test message
];

// ----------------------------
// Decrypt and Sort
// ----------------------------
const shift = 3; // Caesar cipher shift value
const decryptedMessages = messages.map(msg => ({
  date: msg.date,
  decrypted: caesarDecrypt(msg.encrypted, shift)
}));

const sortedMessages = mergeSort(decryptedMessages);

// ----------------------------
// Display Messages
// ----------------------------
const container = document.getElementById('message-container');

sortedMessages.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.date}: ${item.decrypted}`;
  container.appendChild(li);
});
