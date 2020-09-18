function lastIndexOf(array, value) {
  //return the index of the last time the calue occurs in the array
  for (let i = array.length; i > 0; i--) {
    if (array[i - 1] === value) {
      return i - 1;
    }
  return -1;
  }
}