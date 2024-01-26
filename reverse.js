// TAsk 1
const orderFood = new Promise((resolve, reject)=>{
    let ordered = true
    if (ordered)
    resolve(400)
    else 
    reject()
   })
   orderFood.then(done)
   .catch(fail)
   
   function done(price){
    console.log (` You have ordered your meal and it costs Rs ${price}`)
   }
   function fail(){
   console.log(`Try it again`)
   }
// Task 2
function task(text) {

  const conetent = text.split(' ');

  const step1 = conetent.map(i => callbackfun(i));

  const step2 = step1.join(' ');

  return step2;
}
// callback funtion to 
function callbackfun(str) {
  
  return str.split('').reverse().join('');
}

const textToBeReverse = ` So The Task Is Completed `;
const res = task(textToBeReverse);


console.log(`the task is accomplished and the output is here " ${res}"`);