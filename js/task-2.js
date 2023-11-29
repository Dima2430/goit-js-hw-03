function makeArray(firstArray, secondArray, maxLength) {
  let twoArrays = firstArray.concat(secondArray);
  twoArrayLength = twoArrays.length;
  if (twoArrayLength >= maxLength) {
    return twoArrays.slice(0,maxLength);
  } else {
    return twoArrays;
  }

}

