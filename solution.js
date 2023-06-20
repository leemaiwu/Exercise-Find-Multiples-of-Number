const findMultiples = (integer, limit) => {
   let multiples = []
   let startingNum = integer
   while (startingNum <= limit) {
    if (startingNum % integer === 0) {
        multiples.push(startingNum)
    }
    startingNum++
   }
   return multiples
}

console.log(findMultiples(2, 6)) // [2, 4, 6]