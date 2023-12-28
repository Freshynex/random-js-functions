// turns dash-separated-strings into camelCasedStrings
function camelize(str) {
      if (!str) return '';
      let words = str
        .split('-')
        .map((word, index) => {
          if (index == 0) return word;
          return word[0].toUpperCase() + word.slice(1);
        })
        .join('');

      return words;
}
