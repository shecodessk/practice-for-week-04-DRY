const bigNum = (n) =>{
  let biggerNum = n;
  return biggerNum;
}




function multiplyBiggerNumByTwo(num1, num2) {
  return num1 > num2 ? bigNum(num1) * 2 : bigNum(num2) * 2; 
}

function divideBiggerNumByThree(num1, num2) {
  return num1 > num2 ? bigNum(num1) / 3 : bigNum(num2) / 3;
}

function eatMostTacos(sum1, sum2) {
  return sum1 > sum2 ? `I ate ${bigNum(sum1)} tacos.` : `I ate ${bigNum(sum2)} tacos.`
}

function adoptSmallerDog(weight1, weight2) {

  return weight1 < weight2 ? `I adopted a dog that weighs ${bigNum(weight1)} pounds.`: `I adopted a dog that weighs ${bigNum(weight2)} pounds.`
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};