const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  const rankedVeg = [];
  vegetables.forEach(function(vegetable){
    if (rankedVeg.length === 0){
      rankedVeg.push(vegetable)
      console.log(rankedVeg)
    } else {
      if (vegetable[metric] > rankedVeg[0][metric]){
        rankedVeg.push(vegetable)
        console.log(rankedVeg)
      }
    }
  })
  return rankedVeg.pop().submitter 
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));