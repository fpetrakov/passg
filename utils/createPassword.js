const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

function createPassword(length, hasNumbers, hasSymbols) {
  let characters = alpha;

  hasNumbers ? (characters += numbers) : "";
  hasSymbols ? (characters += symbols) : "";

  return generatePassword(length, characters);
}

function generatePassword(length, characters) {
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomCharIndex = Math.floor(Math.random() * characters.length);

    password += characters.charAt(randomCharIndex);
  }

  return password;
}

module.exports = createPassword;
