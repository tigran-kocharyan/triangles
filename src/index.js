/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length;
  let num=0;
  for (let i=0; i<length; i++) {
    let lover=preferences[i]-1;
    if (lover==i) 
      continue;
    let lovernext=preferences[lover]-1;
    if (lover==lovernext) 
      continue;
    let lovernextlover=preferences[lovernext]-1;
    if (lovernextlover==lovernext) 
      continue;
    if (lovernextlover==i)
      num++;
  }
  return num/3;
}
