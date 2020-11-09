function warnTheSheep(queue) {
  let farmer = 0;

  for ( let i = queue.length; i >=  queue.length; i++){
    farmer++
    
    if(queue[queue.length-1] === "wolf") {
      let scream = 'Pls go away and stop eating my sheep'

      return scream
    } else if ( queue[i] === 'wolf'){
      let warn = `Oi! Sheep ${farmer -1} You are about to be eaten by a wolf`
      return warn
    }


  }



// Test Function do not edit
function Test(fun, result) {
  console.log(fun === result)
}


// Test assertions
// Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
// Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
// Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
// Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
