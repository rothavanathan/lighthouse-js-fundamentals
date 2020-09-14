const finalPosition = function (moves) {
  let position = [0,0];
  moves.map(move => {
    switch(move){
      case "east":
        position[0] += 1
        break;
      case "west":
        position[0] -= 1
        break;      
      case "north":
        position[1] += 1
        break;
      case "south":
        position[1] -= 1
        break;
    }
  })
  return position  
}
   
