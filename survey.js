const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  answers.push(answer);
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answers.push(answer);
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
      answers.push(answer);
      rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
        answers.push(answer);
        rl.question('Which sport is your absolute favourite? ', (answer) => {
          answers.push(answer);
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
            answers.push(answer);
            rl.close();
            console.log(`${answers[0]} likes ${answers[1]}. Their favourite meal is ${answers[2]}, and their favourite thing to eat for that meal is ${answers[3]}. Their favourite sport is ${answers[4]}. Here's a few words from them about what they are good at: ${answers[5]}`)
          });
        });
      });
    });
  });
});