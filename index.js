
// Write and optimum code following dry principle
 // Build a quiz application with 10 questions
// allow use only above 18
// for every right response user gets +4 and incorrect response he loses -2
// Finally display the total score and also his /her performance with high score
// const highscore = { Kishore:32, Rajesh: 29} 
const readlineSync = require('readline-sync');
// global score
let score = 0;
let userName;
let userAge;
let kishoreScore = 32;
let rajeshScore = 29
// question database
const questions = [
  {question: `Question-1: What is the capital city of Tamilnadu\n`, answer: 'Chennai'},
  {question: `Question-2: What is the capital city of Maharastra\n`, answer: 'Mumbai'},
  {question: `Question-3: What is the capital city of Telungana\n`, answer: 'Hydrabad'},
  {question: `Question-4: What is the capital city of Gujarat\n`, answer: 'Ahmedabad'},
  {question: `Question-5: What is the capital city of Punjab\n`, answer: 'Chandigarh'},
  {question: `Question-6: What is the capital city of Uttar Pradesh\n`, answer: 'Lucknow'},
  {question: `Question-7: What is the capital city of Goa\n`, answer: `panaji`},
  {question: `Question-8: What is the capital city of Kerala\n`, answer: 'Thiruvananthapuram'},
  {question: `Question-9: What is the capital city of Rajarstan\n`, answer: 'Jaipur'},
  {question: `Question-10: What is the capital city of Karnataka\n`, answer: 'Bangalore'},
]
   

// function
const checkAnswer = function(question, answer){
  const userResponse = readlineSync.question(question);
  if(userResponse.toLowerCase() === answer.toLowerCase()){
  console.log('Correct Answer');
    score = score + 4;
    console.log(`Your score is ${score}`);
  }else{
  console.log(`Wrong Answer, The Correct Answer is ${answer}`);
    score = score - 2;
    console.log(`Your score is ${score}`);
}
}
const welcome =function(){
userName = readlineSync.question('May i have your name?\n ');
userAge = readlineSync.question('May i have your Age?\n ');
 let welcomeMessage = `Hi ${userName}, welcome to quiz on capital cities`;
console.log(`<!--------------------------------!>`);
  console.log(welcomeMessage);
console.log(`<!--------------------------------!>`);
  console.log(`Lets Play the game...... `)
}
const game = function(){
// Question
  for (let i = 0; i <questions.length; i++){
    checkAnswer(questions[i].question, questions[i].answer);
  }
console.log(`<!--------------------------------!>`);
  console.log(`Congragulations, you have completed the quiz `);

}
const comparision = function(){
  if(score == kishoreScore){
    console.log(`You have reached Highest Score`);
    console.log(`First place: ${userName} = ${score}`);
    console.log(`First place: Kishore = ${kishoreScore}`);
    console.log(`Third place: Rajesh = ${rajeshScore}`);
  }else if(score > kishoreScore){
    console.log(`You have reached Highest Score`);
    console.log(`First place: ${userName} = ${score}`);
    console.log(`Second place: Kishore = ${kishoreScore}`);
    console.log(`Third place: Rajesh = ${rajeshScore}`);
  }else if(score >= rajeshScore && score < kishoreScore){
    console.log(`You have reached Second Highest Score`);
    console.log(`First place: Kishore = ${kishoreScore}`);
    console.log(`Second place: ${userName} = ${score}`);
    console.log(`Second place: Rajesh = ${rajeshScore}`);
  }else if(score == rajeshScore - 2){
    console.log(`You have reached Third Highest Score`);
    console.log(`First place: Kishore = ${kishoreScore}`);
    console.log(`Second place: Rajesh = ${rajeshScore}`);
    console.log(`Third place: ${userName} = ${score}`);
  }else{
    console.log(`Your score : ${score}`);
    console.log(`First place: Kishore = ${kishoreScore}`);
    console.log(`Second place: Rajesh = ${rajeshScore}`);
  }
}

// welcome
welcome();
if (userAge >= 18){  
  game();
  comparision();
}else{
  console.log(`Hi ${userName}, Come after you are 18`);
  console.log(`<!--------------------------------!>`);
}
