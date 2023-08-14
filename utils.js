const fs = require("fs");
function upThen5(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      result.push(array[i]);
    }
  }
  fs.appendFile(
    "results.text",
    result.join(" ") + "\n",
    (err) => {
      if (err) throw err;
    }
  );
  fs.appendFile("results.text", `${result.length}` + "\n", (err) => {
    if (err) throw err;
  });
}
module.exports = { upThen5 };
