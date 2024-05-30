const fs = require("fs");
const myArgs = process.argv.slice(2);

function tokenApplication() {
  if (DEBUG) console.log("tokenApp()");

  switch (myArgs[1]) {
    case "--count":
      if (DEBUG) console.log("token.tokenCount() --count");
      break;
    case "--list":
      if (DEBUG) console.log("token.tokenList() --list");
      break;
    case "--new":
      if (DEBUG) console.log("token.newToken() --new");
      break;
    case "--upd":
      if (DEBUG) console.log("token.updateToken()");
      break;
    case "--fetch":
      if (DEBUG) console.log("token.fetchToken");
      break;
    case "--search":
      if (DEBUG) console.log("token.searchToken()");
      break;
    case "--help":
    case "--h":
    default:
      fs.readFile(__dirname + "/usage.txt", (error, data) => {
        if (error) throw error;
        console.log(data.toString());
      });
  }
}

module.exports = {
  tokenApplication,
};
