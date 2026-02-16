function mergeSortDescending(data) {
  if (data.length <= 1) return data;

  const mid = Math.floor(data.length / 2);
  const left = mergeSortDescending(data.slice(0, mid));
  const right = mergeSortDescending(data.slice(mid));

  return mergeDescending(left, right);
}

function mergeDescending(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i].fill >= right[j].fill) { // descending by .fill
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append remaining items
  return result
    .concat(left.slice(i))
    .concat(right.slice(j));
}
