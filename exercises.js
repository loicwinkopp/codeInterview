function stringToLeet(string) {
  const alphabet = {
    a: '4',
    A: '4',
    e: '3',
    E: '3',
    i: '1',
    I: '1',
    o: '0',
    O: '0',
    s: '5',
    S: '5',
    t: '7',
    T: '7',
    b: '7',
    B: '7'
  };

  for (var i = 0; i < string.length; i++) {
    if (alphabet[string[i]]) {
      string = string.replace(string[i], alphabet[string[i]]);
    }
  }

  return string;
}

function countCharacters(string) {
  if (!string.length) {
    return false;
  }

  let counterString = string[0];
  let counter = 1;
  for (var i = 1; i < string.length; i++) {
    currentChar = string[i];
    if (counterString[counterString.length - 1] === string[i]) {
      counter++;
    } else {
      counterString += counter;
      counterString += string[i];
      counter = 1;
    }
  }

  return (counterString += counter);
}
