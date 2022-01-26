let input = 'turpentine and turtles';
const vowels = ['a','e', 'i','o','u'];
const resultArray = [];
for(let i=0; i<input.length; i++){
  //console.log(input[i]);
  for(let j=0; j<vowels.length; j++){
    if(input[i] === vowels[j]){
      resultArray.push(input[i]);
      //resultArray[i].push();
      //console.log(resultArray);
      if(input[i] === 'e'){
        resultArray.push(input[i]);
        //console.log(resultArray);
      }
      if(input[i] === 'u'){
        resultArray.push(input[i]);
        //console.log(resultArray);
      }

    }
    //console.log(`${vowels[j]} is ${j}` );
  }
}
console.log(resultArray.join('').toUpperCase());


