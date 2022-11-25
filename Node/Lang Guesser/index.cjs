const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const user_input = process.argv[0];

const langCode = franc(user_input);

if(langCode === 'und'){
    console.log("Sorry!, Try some other sentence or longer senrtence.".red);
}
else{
    const language = langs.where("3", langCode);
    console.log(`The language is: ${language.name}`.green);
}