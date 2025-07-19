const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//fdgdsf

let variable = 'variable';//123122312

const guessMessageInfo = 'Please, guess the number: ';
const fromZeroToTenRandomNumber = Math.random() * 10;
const roundedRandomNumber = Math.round(fromZeroToTenRandomNumber);
let hasGuessed = false;


function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
}


async function guessNumber() {
    while (!hasGuessed) {
        const enteredNumber = await askQuestion(guessMessageInfo);
        if (Number(enteredNumber) === roundedRandomNumber) {
            hasGuessed = true;
            console.log('You guessed!');
            rl.close();
        } else {
            console.log('You are wrong! Try again');
        }
    }
}

(async () => {
    await guessNumber();
})();


