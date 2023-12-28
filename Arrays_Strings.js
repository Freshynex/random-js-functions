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

// returns new array with numbers between a and b
  function filterRange(arr, a, b){
    return arr.filter((e) => {
      return (e >= a && e <= b)
    })
  }

// mutates original array so it contains numbers between a and b

function filterRangeInPlace(arr, a, b){

  let indexesToRemove = [];
	
  for(let i=arr.length - 1; i>=0; i--){
  	let element = arr[i];

    if(!(element >= a && element <= b)){
    	arr.splice(i, 1);
    }
  }
}

// sort array
arr.sort((a, b) => a-b);

//sort array in reverse
arr.sort((a, b) => b-a);
