function convertOrderToLegend(order) {
  order = order.split('');
  var legend = {};
  for (var i = 0; i< order.length; i++){
    legend[order[i]] = i+1;
  }
  return legend;
}

function encodeStrWithLegend(str, legend){
  var orderArray = [];
  if (str === '') {
    orderArray.push(0);
  } else {
    for (var i = 0; i < str.length; i++) {
      orderArray.push(legend[str[i]]);
    }
  }
  return String.fromCharCode.apply(null, orderArray);
}

function createDecodedEncodedPair(str, legend) {
  return [str, encodeStrWithLegend(str, legend)];
}

function compareEncodedFromPair(a,b) {
  if (a[1] === b[1]) {
    return 0;
  } else if (a[1] < b[1]) {
    return -1;
  } else {
    return 1;
  }
}

function selectDecodedFromPair(pair) {
  return pair[0];
}

function lexographicSort(strArr, order) {
  var legend = convertOrderToLegend(order);
  return strArr
    .map(function(str) {
      return createDecodedEncodedPair(str, legend);
    })
    .sort(compareEncodedFromPair)
    .map(selectDecodedFromPair);
}

console.log(lexographicSort( ["acb", "abc", "bca", "abc"], "abc"))
console.log(lexographicSort( ["acb", "abc", "bca"], "cba"))
console.log(lexographicSort( ["aaa","aa",""], "a"))
