
function pigLatinTranslator(str) {
  str = str.toLowerCase();

  if (["a", "e", "i", "o", "u"].indexOf(str[0]) > -1) {
    return str = str + '-' + "ay";
  }
  else {
    for (var i = 0; i < str.length; i++) {
      if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1) {
        let firstcons = str.slice(0, i);
        let middle = str.slice(i, str.length);
        str = middle + '-' + firstcons + "ay";
        break;
      }
    }
    return str;
  }
}

function englishTranslator(str) {
  str = str.toLowerCase();

  return (str.slice(str.indexOf('-') + 1, -2) + str.slice(0, str.indexOf('-')));
}

